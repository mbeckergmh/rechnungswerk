<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCP\IDBConnection;
use OCP\IGroupManager;
use OCP\IURLGenerator;
use OCP\Notification\IManager;
use Psr\Log\LoggerInterface;

/**
 * Aktiver Mahnlauf: taeglich ueberfaellige Rechnungen finden, eine Mahnstufe
 * vorschlagen und per Nextcloud-Notification benachrichtigen — bewusst kein
 * Automatikversand (Konzept: "Vorschlag statt Automatikversand"). Ob und wann
 * die Stufe tatsaechlich gesetzt wird, entscheidet ein Mensch weiterhin ueber
 * InvoiceService::setDunningLevel().
 *
 * Der Mahnabstand ist relativ zum individuellen Faelligkeitsdatum jeder
 * Rechnung (dueDate = issueDate + paymentTermDays, frei verhandelt je Kunde,
 * #4a) — nicht zu einem globalen Stichtag. Nur das Intervall zwischen den
 * Stufen (Standard 7 Tage) ist eine einzelne, konfigurierbare Einstellung.
 */
class DunningService {

	/** Fallback, wenn in den Einstellungen kein Intervall hinterlegt ist. */
	private const DEFAULT_INTERVAL_DAYS = 7;

	public function __construct(
		private readonly InvoiceMapper $invoiceMapper,
		private readonly SettingsService $settingsService,
		private readonly PermissionService $permissionService,
		private readonly IGroupManager $groupManager,
		private readonly IDBConnection $db,
		private readonly IManager $notificationManager,
		private readonly IURLGenerator $urlGenerator,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Scannt alle offenen, überfälligen Rechnungen, schickt für jede neu
	 * erreichte Mahnstufe eine Notification an alle Nutzer mit App-Zugriff und
	 * merkt sich, bis zu welcher Stufe schon benachrichtigt wurde.
	 *
	 * @return int Anzahl der verschickten Vorschlags-Notifications
	 */
	public function proposeAndNotify(): int {
		$intervalDays = $this->settingsService->getCompany()->getDunningIntervalDays() ?? self::DEFAULT_INTERVAL_DAYS;
		$recipients = $this->recipientUserIds();
		if ($recipients === []) {
			// Ohne Empfaenger macht ein Lauf keinen Sinn (und wuerde
			// dunning_notified_level trotzdem hochsetzen, als waere schon
			// benachrichtigt worden) — ueberspringen statt "leer" zu senden.
			return 0;
		}

		$today = new DateTime();
		$today->setTime(0, 0, 0);

		$sent = 0;
		foreach ($this->invoiceMapper->findByTypes([Invoice::TYPE_INVOICE]) as $invoice) {
			$level = $this->proposedLevel($invoice, $today, $intervalDays);
			if ($level === null) {
				continue;
			}
			try {
				foreach ($recipients as $userId) {
					$this->notify($userId, $invoice, $level);
				}
				$this->markNotified($invoice->getId(), $level);
				$sent++;
			} catch (\Throwable $e) {
				// Eine fehlgeschlagene Rechnung darf den Lauf fuer die anderen
				// nicht abbrechen (Konsistenz mit DatevConfirmationJob).
				$this->logger->warning('Rechnungswerk: Mahnstufen-Vorschlag fehlgeschlagen', [
					'invoiceId' => $invoice->getId(),
					'exception' => $e,
				]);
			}
		}
		return $sent;
	}

	/**
	 * @return int|null die vorzuschlagende Stufe, oder null wenn (noch) nichts
	 *   zu tun ist: nicht festgeschrieben, bereits bezahlt, kein Fälligkeits-
	 *   datum, noch nicht überfällig, oder die Schwelle wurde schon einmal
	 *   erreicht (dunning_level oder dunning_notified_level ist schon so hoch).
	 */
	private function proposedLevel(Invoice $invoice, DateTime $today, int $intervalDays): ?int {
		if ($invoice->getStatus() !== Invoice::STATUS_COMMITTED || $invoice->getPaidAt() !== null) {
			return null;
		}
		$due = $invoice->getDueDate();
		if ($due === null || $today <= $due) {
			return null;
		}
		$daysOverdue = $due->diff($today)->days;
		// Alle $intervalDays Tage eine Stufe weiter, gedeckelt auf die höchste
		// bekannte Stufe (3).
		$level = min(max(Invoice::DUNNING_LEVELS), intdiv($daysOverdue, max(1, $intervalDays)));
		if ($level < 1) {
			return null;
		}
		$baseline = max($invoice->getDunningLevel() ?? 0, $invoice->getDunningNotifiedLevel() ?? 0);
		return $level > $baseline ? $level : null;
	}

	private function markNotified(int $invoiceId, int $level): void {
		$this->db->beginTransaction();
		try {
			$invoice = $this->invoiceMapper->findOneForUpdate($invoiceId);
			$invoice->setDunningNotifiedLevel(max($invoice->getDunningNotifiedLevel() ?? 0, $level));
			$invoice->setUpdatedAt(new DateTime());
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
	}

	private function notify(string $userId, Invoice $invoice, int $level): void {
		$notification = $this->notificationManager->createNotification();
		$notification->setApp(Application::APP_ID)
			->setUser($userId)
			->setDateTime(new DateTime())
			->setObject('invoice-dunning', $invoice->getId() . '-' . $level)
			->setSubject('dunning-proposal', [
				'invoiceId' => $invoice->getId(),
				'number' => (string)$invoice->getNumber(),
				'level' => $level,
			])
			->setLink($this->urlGenerator->linkToRouteAbsolute('rechnungswerk.page.index') . '#/invoices/' . $invoice->getId());
		$this->notificationManager->notify($notification);
	}

	/**
	 * Aufgeloeste, einzelne Nextcloud-User-IDs aller App-Nutzer (Admins +
	 * Users-Liste + NC-Server-Admins, siehe PermissionService), dedupliziert.
	 * Gruppen werden aufgeklappt — Notifications gehen an Personen, nicht an
	 * Gruppen.
	 *
	 * @return string[]
	 */
	private function recipientUserIds(): array {
		$ids = [];
		$addGroup = function (string $gid) use (&$ids): void {
			$group = $this->groupManager->get($gid);
			if ($group === null) {
				return;
			}
			foreach ($group->getUsers() as $user) {
				$ids[$user->getUID()] = true;
			}
		};
		// NC-Server-Admins sind laut PermissionService::isNextcloudAdmin() immer
		// App-Admins, unabhaengig von der konfigurierten Liste.
		$addGroup('admin');
		foreach ([...$this->permissionService->getAdmins(), ...$this->permissionService->getUsers()] as $entry) {
			if (str_starts_with($entry, 'user:')) {
				$ids[substr($entry, 5)] = true;
			} elseif (str_starts_with($entry, 'group:')) {
				$addGroup(substr($entry, 6));
			}
		}
		return array_keys($ids);
	}
}

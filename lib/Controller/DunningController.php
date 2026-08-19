<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCSController;
use OCP\IRequest;

/**
 * Schlanke OCS-API fuer die externe Hub-App (Ingenieurbuero-Auftragswesen):
 * ueberfaellige Rechnungen auflisten und die vorgeschlagene Mahnstufe nach
 * Freigabe ablegen. Die Mahnlogik selbst (Fristen, Eskalation, Vorschlag ueber
 * Nextcloud-Notifications) lebt in der Hub-App, nicht hier — dieser
 * Controller ist bewusst duenn und delegiert an InvoiceService.
 *
 * Anders als InvoiceController (session-/CSRF-basiert, fuer die eigene Vue-UI)
 * ist dies ein OCSController: erreichbar unter /ocs/v2.php/apps/rechnungswerk/
 * ..., authentifizierbar per Basic Auth mit App-Passwort — der ueblich Weg,
 * wie eine andere Nextcloud-App oder ein externer Dienst zugreift.
 */
class DunningController extends OCSController {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly InvoiceService $invoiceService,
		private readonly PermissionService $permissionService,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	/**
	 * Rechnungen mit ihrem Zahlungs- und Mahnstatus. Ohne Filter alle
	 * Rechnungen (keine Angebote/Stornos); mit ?paymentStatus=overdue nur die
	 * fuer einen Mahnlauf relevanten.
	 */
	#[NoAdminRequired]
	public function index(?string $paymentStatus = null): DataResponse {
		if (($r = $this->guardAccess()) !== null) {
			return $r;
		}
		$items = array_values(array_filter(
			$this->invoiceService->list(),
			static fn (array $i): bool => $i['invoiceType'] === Invoice::TYPE_INVOICE
				&& ($paymentStatus === null || $i['paymentStatus'] === $paymentStatus),
		));
		$slim = array_map(static fn (array $i): array => [
			'id' => $i['id'],
			'number' => $i['number'],
			'recipientName' => $i['recipientName'],
			'customerId' => $i['customerId'],
			'totalCents' => $i['totalCents'],
			'dueDate' => $i['dueDate'],
			'paymentStatus' => $i['paymentStatus'],
			'dunningLevel' => $i['dunningLevel'],
			'lastDunningAt' => $i['lastDunningAt'],
		], $items);
		return new DataResponse($slim);
	}

	/**
	 * Mahnstufe setzen (0..3). Keine Sperre gegen Ruecksprünge — die
	 * Eskalationsregeln liegen bewusst in der Hub-App, nicht hier.
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function setDunning(int $id, int $level, ?string $date = null): DataResponse {
		if (($r = $this->guardEdit()) !== null) {
			return $r;
		}
		try {
			return new DataResponse($this->invoiceService->setDunningLevel($id, $level, $date));
		} catch (NotFoundException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_NOT_FOUND);
		} catch (IllegalStateException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_CONFLICT);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	private function guardAccess(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return null;
	}

	private function guardEdit(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->canEdit($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return null;
	}
}

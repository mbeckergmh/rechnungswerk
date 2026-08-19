<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Notification;

use OCA\Rechnungswerk\AppInfo\Application;
use OCP\IURLGenerator;
use OCP\L10N\IFactory;
use OCP\Notification\INotification;
use OCP\Notification\INotifier;

/**
 * Rendert die Mahnlauf-Vorschlags-Notification (DunningService) fuers
 * Glocken-Menue. Aktuell der einzige Notification-Typ der App; kommt ein
 * zweiter hinzu, wird der subject-switch entsprechend erweitert.
 */
class Notifier implements INotifier {

	public function __construct(
		private readonly IFactory $l10nFactory,
		private readonly IURLGenerator $urlGenerator,
	) {
	}

	public function getID(): string {
		return Application::APP_ID;
	}

	public function getName(): string {
		return $this->l10nFactory->get(Application::APP_ID)->t('RechnungsWerk');
	}

	public function prepare(INotification $notification, string $languageCode): INotification {
		if ($notification->getApp() !== Application::APP_ID) {
			throw new \InvalidArgumentException('Unknown app');
		}
		if ($notification->getSubject() !== 'dunning-proposal') {
			throw new \InvalidArgumentException('Unknown subject');
		}

		$l = $this->l10nFactory->get(Application::APP_ID, $languageCode);
		$params = $notification->getSubjectParameters();
		$level = (int)($params['level'] ?? 0);
		$number = (string)($params['number'] ?? '');

		$notification->setParsedSubject(
			$l->t('Mahnstufe %1$d vorgeschlagen: Rechnung %2$s ist überfällig', [$level, $number]),
		)->setParsedMessage(
			$l->t('Rechnung %1$s hat das Zahlungsziel überschritten. Prüfen und ggf. Mahnstufe setzen oder als bezahlt markieren.', [$number]),
		)->setIcon($this->urlGenerator->getAbsoluteURL($this->urlGenerator->imagePath(Application::APP_ID, 'app-dark.svg')));

		return $notification;
	}
}

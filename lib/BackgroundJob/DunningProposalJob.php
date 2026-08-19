<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\BackgroundJob;

use OCA\Rechnungswerk\Service\DunningService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use Psr\Log\LoggerInterface;

/**
 * Taeglicher Mahnlauf-Vorschlag: ueberfaellige Rechnungen finden und per
 * Nextcloud-Notification vorschlagen, keine Rechnung wird automatisch
 * versendet. Einmal am Tag reicht — der Mahnabstand ist mit Default 7 Tagen
 * ohnehin viel groesser als das Job-Intervall.
 */
class DunningProposalJob extends TimedJob {

	public function __construct(
		ITimeFactory $time,
		private readonly DunningService $dunningService,
		private readonly LoggerInterface $logger,
	) {
		parent::__construct($time);
		$this->setInterval(24 * 60 * 60);
	}

	protected function run($argument): void {
		try {
			$sent = $this->dunningService->proposeAndNotify();
			if ($sent > 0) {
				$this->logger->info('Rechnungswerk: Mahnlauf-Vorschlaege verschickt', ['count' => $sent]);
			}
		} catch (\Throwable $e) {
			// Wie DatevConfirmationJob: ein Fehler im Lauf darf den naechsten
			// taeglichen Versuch nicht verhindern.
			$this->logger->warning('Rechnungswerk: Mahnlauf-Vorschlag fehlgeschlagen', ['exception' => $e]);
		}
	}
}

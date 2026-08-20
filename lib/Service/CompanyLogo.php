<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Settings;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use Psr\Log\LoggerInterface;

/**
 * Laedt das Firmenlogo als data:-URI zum Einbetten in dompdf-Belege.
 *
 * Eigene Klasse, weil sowohl die Rechnungs-/Angebots-PDFs (ZugferdService) als
 * auch das Mahnschreiben (DunningLetterService) dasselbe Logo brauchen. Bliebe
 * das privat im ZugferdService, muesste die Mahnung es nachbauen — und dann
 * driften erlaubte Bildformate und Fehlerbehandlung zwischen den Belegarten
 * auseinander.
 */
class CompanyLogo {

	/** Formate, die der Bildwaehler zulaesst und dompdf zuverlaessig einbettet. */
	private const ALLOWED_MIME = ['image/png', 'image/jpeg', 'image/gif'];

	public function __construct(
		private readonly IRootFolder $rootFolder,
		private readonly LoggerInterface $logger,
	) {
	}

	/** @return ?string data:-URI oder null, wenn kein (brauchbares) Logo hinterlegt ist */
	public function dataUri(Settings $settings): ?string {
		$fileId = $settings->getLogoFileId();
		if ($fileId === null) {
			return null;
		}
		try {
			// Resolve globally, not via getUserFolder(): the central company
			// settings are owned by the COMPANY_KEY sentinel (not a real user),
			// and the logo is picked from the admin's files. getById() on the
			// root folder finds the node regardless of owner.
			$nodes = $this->rootFolder->getById($fileId);
			$node = $nodes[0] ?? null;
			if (!$node instanceof File) {
				return null;
			}
			$mime = $node->getMimeType();
			if (!in_array($mime, self::ALLOWED_MIME, true)) {
				return null;
			}
			return 'data:' . $mime . ';base64,' . base64_encode($node->getContent());
		} catch (\Throwable $e) {
			$this->logger->warning('Rechnungswerk: could not load invoice logo', ['exception' => $e]);
			return null;
		}
	}
}

<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Settings;

/**
 * Gemeinsamer Briefkopf aller Geschaeftsbriefe der App.
 *
 * Rechnung, Angebot und Storno rendert ZugferdService, die Mahnung
 * DunningLetterService — was sie teilen, ist das Aeussere: Logo, Firmenblock,
 * Absenderzeile, Empfaengerblock, Fusszeile mit den Steuernummern und die
 * dazugehoerigen CSS-Regeln. Ohne diese Klasse muesste die Mahnung das
 * duplizieren und beim naechsten Logo- oder Farbwechsel driften die Belege
 * auseinander.
 *
 * Bewusst NICHT hier: die Positionstabelle, Summen, Zahlungsangaben und der
 * Girocode. Die haengen an Rechnungsdaten und gehoeren zum jeweiligen
 * Renderer.
 *
 * Die Methoden liefern fertiges HTML; das Escaping passiert hier, damit es
 * nicht in jedem Aufrufer wiederholt wird.
 */
class LetterLayout {

	public const DEFAULT_ACCENT = '#2c3e50';

	private static function e(?string $s): string {
		return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
	}

	/**
	 * CSS fuer Seitengeruest, Kopf, Empfaenger, Titel, Meta-Tabelle und Fuss.
	 * Ohne umschliessendes <style>, damit der Aufrufer eigene Regeln anhaengen
	 * kann.
	 */
	public static function css(string $accent): string {
		return <<<CSS
* { font-family: "DejaVu Sans", sans-serif; }
body { font-size: 10pt; color: #1a1a1a; margin: 0; }
.header { overflow: hidden; margin-bottom: 24px; }
.header .logo { max-height: 70px; max-width: 220px; float: right; }
.header .company { font-size: 9pt; color: #555; }
.header .company .name { font-size: 12pt; font-weight: bold; color: {$accent}; }
.sender-line { font-size: 7pt; color: #777; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 6px; }
.recipient { margin: 8px 0 24px; }
h1 { font-size: 18pt; color: {$accent}; margin: 0 0 4px; }
table.meta { font-size: 9pt; margin-bottom: 16px; }
table.meta td { padding: 1px 8px 1px 0; }
table.meta .meta-label { color: #666; }
.company-contact { font-size: 8.5pt; color: #555; margin-top: 2px; }
.intro { margin: 0 0 14px; font-size: 9.5pt; }
.intro p { margin: 4px 0; }
.footer { margin-top: 28px; padding-top: 6px; border-top: 1px solid #ccc; font-size: 8pt; color: #777; text-align: center; }
CSS;
	}

	/**
	 * Kopfbereich: Logo rechts, Firmenname und -anschrift links, darunter
	 * optional die Ansprechpartner-Zeile.
	 *
	 * @param ?string $logoDataUri fertige data:-URI oder null
	 * @param string[] $contactParts z. B. ['Ansprechpartner: …', 'Tel.: …']
	 */
	public static function header(Settings $settings, ?string $logoDataUri, array $contactParts = []): string {
		$company = self::e($settings->getCompanyName());
		$companyAddr = nl2br(self::e($settings->getCompanyAddress()));
		$logoHtml = $logoDataUri !== null ? '<img src="' . $logoDataUri . '" class="logo" alt="">' : '';
		$contactHtml = $contactParts !== []
			? '<div class="company-contact">' . implode(' &middot; ', $contactParts) . '</div>' : '';

		return '<div class="header">' . "\n"
			. '  ' . $logoHtml . "\n"
			. '  <div class="company"><span class="name">' . $company . '</span><br>' . $companyAddr . $contactHtml . '</div>' . "\n"
			. '</div>';
	}

	/** Schmale Absenderzeile ueber dem Anschriftenfeld (Fensterkuvert). */
	public static function senderLine(Settings $settings): string {
		return '<div class="sender-line">' . self::e($settings->getCompanyName()) . '</div>';
	}

	/**
	 * Anschriftenfeld.
	 *
	 * @param string[] $lines bereits gefiltert, noch nicht escaped
	 */
	public static function recipient(array $lines): string {
		return '<div class="recipient">' . implode('<br>', array_map(self::e(...), $lines)) . '</div>';
	}

	/** Fusszeile mit USt-IdNr./Steuernummer; leer, wenn beides fehlt. */
	public static function footer(Settings $settings): string {
		$taxIds = array_filter([
			($settings->getVatId() ?? '') !== '' ? 'USt-IdNr.: ' . self::e($settings->getVatId()) : null,
			($settings->getTaxNumber() ?? '') !== '' ? 'Steuernummer: ' . self::e($settings->getTaxNumber()) : null,
		]);
		return $taxIds !== [] ? '<div class="footer">' . implode(' &middot; ', $taxIds) . '</div>' : '';
	}
}

<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use DateTimeImmutable;
use Dompdf\Dompdf;
use Dompdf\Options;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\Settings;

/**
 * Erzeugt das Mahnschreiben als PDF — je Rechnung eines, nicht als
 * Sammelmahnung ueber alle offenen Posten eines Kunden.
 *
 * Bewusst NICHT im ZugferdService: ein Mahnschreiben ist kein Beleg im Sinne
 * von EN16931, hat keine Positionen und bekommt kein eingebettetes XML. Es ist
 * ein Anschreiben ueber eine bestehende Rechnung. Gemeinsam mit Rechnung und
 * Angebot ist nur das Aeussere, das kommt aus LetterLayout.
 *
 * Der Ton der drei Stufen ist absichtlich abgestuft: Stufe 1 unterstellt ein
 * Versehen ("Zahlungserinnerung"), erst Stufe 3 nennt Konsequenzen. Die Texte
 * stehen hier statt in den Einstellungen, weil sie juristisch heikel sind und
 * eine falsche Formulierung teurer waere als fehlende Anpassbarkeit; frei
 * konfigurierbar sind die Betraege und Fristen.
 */
class DunningLetterService {

	/** Ueberschrift und Anrede-Absatz je Mahnstufe. */
	private const LEVEL_TITLE = [
		1 => 'Zahlungserinnerung',
		2 => '1. Mahnung',
		3 => '2. Mahnung',
	];

	private const LEVEL_BODY = [
		1 => 'sicher ist es Ihrer Aufmerksamkeit entgangen, dass die unten aufgeführte Rechnung noch offen ist. '
			. 'Sollten Sie die Zahlung bereits veranlasst haben, betrachten Sie dieses Schreiben bitte als gegenstandslos.',
		2 => 'trotz unserer Zahlungserinnerung konnten wir bislang keinen Zahlungseingang zu der unten aufgeführten '
			. 'Rechnung feststellen. Wir bitten Sie, den offenen Betrag zeitnah auszugleichen.',
		3 => 'die unten aufgeführte Rechnung ist trotz mehrfacher Aufforderung weiterhin offen. Wir fordern Sie hiermit '
			. 'letztmalig auf, den offenen Betrag fristgerecht zu begleichen. Nach fruchtlosem Fristablauf behalten wir '
			. 'uns weitere Schritte vor.',
	];

	/** Standard-Zahlungsfrist des Mahnschreibens, wenn nichts eingestellt ist. */
	public const DEFAULT_DUE_DAYS = 7;

	public function __construct(
		private readonly CompanyLogo $companyLogo,
	) {
	}

	/**
	 * Gebuehr fuer eine Mahnstufe in Cent; 0, wenn nichts hinterlegt ist.
	 */
	public function feeCentsFor(Settings $settings, int $level): int {
		return match ($level) {
			1 => $settings->getDunningFee1Cents() ?? 0,
			2 => $settings->getDunningFee2Cents() ?? 0,
			3 => $settings->getDunningFee3Cents() ?? 0,
			default => 0,
		};
	}

	/** Dateiname des Mahnschreibens, z. B. "Mahnung_RE-2026-0042_Stufe2.pdf". */
	public function fileName(Invoice $invoice, int $level): string {
		$number = preg_replace('/[^A-Za-z0-9._-]/', '_', (string)$invoice->getNumber());
		return 'Mahnung_' . $number . '_Stufe' . $level . '.pdf';
	}

	/** Zahlungsfrist, die das Schreiben setzt (heute + eingestellte Tage). */
	public function dueDate(Settings $settings, ?DateTimeImmutable $today = null): DateTimeImmutable {
		$days = $settings->getDunningDueDays() ?? self::DEFAULT_DUE_DAYS;
		$base = $today ?? new DateTimeImmutable('today');
		return $base->modify('+' . max(1, $days) . ' days');
	}

	public function generatePdf(Invoice $invoice, int $level, Settings $settings, ?DateTimeImmutable $today = null): string {
		$html = $this->renderHtml($invoice, $level, $settings, $today);
		$options = new Options();
		$options->set('defaultFont', 'DejaVu Sans');
		$options->set('isRemoteEnabled', false);
		$dompdf = new Dompdf($options);
		$dompdf->loadHtml($html, 'UTF-8');
		$dompdf->setPaper('A4');
		$dompdf->render();
		return (string)$dompdf->output();
	}

	public function renderHtml(Invoice $invoice, int $level, Settings $settings, ?DateTimeImmutable $today = null): string {
		$e = static fn (?string $s): string => htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
		$accent = $this->sanitizeColor($settings->getAccentColor()) ?? LetterLayout::DEFAULT_ACCENT;
		// Weisse Schrift traegt nicht auf hellen Akzentfarben (#171).
		$accentText = ColorContrast::textColorOn($accent);
		$level = max(1, min(3, $level));

		$contactParts = array_filter([
			($settings->getContactPerson() ?? '') !== '' ? 'Ansprechpartner: ' . $e($settings->getContactPerson()) : null,
			($settings->getContactPhone() ?? '') !== '' ? 'Tel.: ' . $e($settings->getContactPhone()) : null,
			($settings->getContactEmail() ?? '') !== '' ? 'E-Mail: ' . $e($settings->getContactEmail()) : null,
		]);

		$country = (string)$invoice->getRecipientCountry();
		$recipientLines = array_values(array_filter([
			(string)$invoice->getRecipientName(),
			($invoice->getRecipientContactPerson() ?? '') !== '' ? 'z. Hd. ' . $invoice->getRecipientContactPerson() : null,
			(string)$invoice->getRecipientAddress(),
			trim((string)$invoice->getRecipientPostalCode() . ' ' . (string)$invoice->getRecipientCity()),
			($country !== '' && $country !== 'DE') ? $country : null,
		], static fn ($l): bool => trim((string)$l) !== ''));

		$sharedCss = LetterLayout::css($accent);
		$headerHtml = LetterLayout::header($settings, $this->companyLogo->dataUri($settings), $contactParts);
		$senderLineHtml = LetterLayout::senderLine($settings);
		$recipientHtml = LetterLayout::recipient(array_map(static fn ($l): string => (string)$l, $recipientLines));
		$footer = LetterLayout::footer($settings);

		$title = $e(self::LEVEL_TITLE[$level]);
		$body = $e(self::LEVEL_BODY[$level]);
		// Bewusst neutral: der Kontaktname ist ein Freitextfeld, aus dem sich
		// keine verlaessliche Anrede ableiten laesst.
		$greeting = 'Sehr geehrte Damen und Herren,';

		$letterDate = ($today ?? new DateTimeImmutable('today'));
		$dueDate = $this->dueDate($settings, $today);

		$meta = [['Datum', $letterDate->format('d.m.Y')]];
		if (($invoice->getRecipientVatId() ?? '') !== '') {
			$meta[] = ['USt-IdNr. Empfänger', $e($invoice->getRecipientVatId())];
		}
		$metaHtml = implode('', array_map(
			static fn (array $row): string => '<tr><td class="meta-label">' . $row[0] . '</td><td>' . $row[1] . '</td></tr>',
			$meta,
		));

		// Offene Posten: genau eine Rechnung (Entscheidung gegen Sammelmahnung),
		// mit Verzugstagen als Begruendung des Schreibens.
		$invoiceTotal = (int)$invoice->getTotalCents();
		$feeCents = $this->feeCentsFor($settings, $level);
		$total = $invoiceTotal + $feeCents;
		$invoiceDue = $invoice->getDueDate();
		$overdueDays = $invoiceDue !== null
			? (int)$invoiceDue->diff(new DateTime($letterDate->format('Y-m-d')))->days
			: 0;

		$rows = '<tr>'
			. '<td>' . $e($invoice->getNumber()) . '</td>'
			. '<td>' . ($invoice->getIssueDate()?->format('d.m.Y') ?? '—') . '</td>'
			. '<td>' . ($invoiceDue?->format('d.m.Y') ?? '—') . '</td>'
			. '<td class="num">' . ($overdueDays > 0 ? $overdueDays : 0) . '</td>'
			. '<td class="num">' . $this->formatMoney($invoiceTotal) . '</td>'
			. '</tr>';

		$feeRow = $feeCents > 0
			? '<tr><td>Mahngebühr (' . $title . ')</td><td class="num">' . $this->formatMoney($feeCents) . '</td></tr>'
			: '';

		$bankLines = array_filter([
			($settings->getBankName() ?? '') !== '' ? 'Bank: ' . $e($settings->getBankName()) : null,
			($settings->getIban() ?? '') !== '' ? 'IBAN: ' . $e($settings->getIban()) : null,
			($settings->getBic() ?? '') !== '' ? 'BIC: ' . $e($settings->getBic()) : null,
		]);
		$bankHtml = $bankLines !== []
			? '<div class="bank">' . implode('<br>', $bankLines) . '</div>'
			: '';

		$dueLine = 'Wir bitten um Ausgleich des Gesamtbetrags bis zum <strong>' . $dueDate->format('d.m.Y') . '</strong>.';

		return <<<HTML
<!DOCTYPE html>
<html lang="de"><head><meta charset="UTF-8"><style>
{$sharedCss}
table.items { width: 100%; border-collapse: collapse; margin-bottom: 4px; table-layout: fixed; }
table.items th { background: {$accent}; color: {$accentText}; text-align: left; padding: 6px 8px; font-size: 9pt; }
table.items td { padding: 6px 8px; border-bottom: 1px solid #e0e0e0; vertical-align: top; word-wrap: break-word; }
table.items td.num, table.items th.num { text-align: right; white-space: nowrap; }
.totals { width: 55%; float: right; margin-top: 8px; }
.totals table { width: 100%; border-collapse: collapse; }
.totals td { padding: 3px 8px; }
.totals td.num { text-align: right; }
.totals .grand td { border-top: 2px solid {$accent}; font-weight: bold; font-size: 11pt; color: {$accent}; }
.payment { clear: both; padding-top: 24px; font-size: 9.5pt; }
.bank { background: #f5f5f5; padding: 6px 8px; margin-top: 8px; }
.due { margin-top: 10px; }
</style></head><body>
{$headerHtml}
{$senderLineHtml}
{$recipientHtml}
<h1>{$title}</h1>
<table class="meta">{$metaHtml}</table>
<div class="intro">
  <p>{$greeting}</p>
  <p>{$body}</p>
</div>
<table class="items">
  <thead><tr>
    <th>Rechnung</th><th>Datum</th><th>fällig am</th><th class="num">Tage überfällig</th><th class="num">Betrag</th>
  </tr></thead>
  <tbody>{$rows}</tbody>
</table>
<div class="totals"><table>
  <tr><td>Rechnungsbetrag</td><td class="num">{$this->formatMoney($invoiceTotal)}</td></tr>
  {$feeRow}
  <tr class="grand"><td>Gesamtbetrag</td><td class="num">{$this->formatMoney($total)}</td></tr>
</table></div>
<div class="payment">
  <p class="due">{$dueLine}</p>
  {$bankHtml}
</div>
{$footer}
</body></html>
HTML;
	}

	private function formatMoney(int $cents): string {
		return number_format($cents / 100, 2, ',', '.') . ' €';
	}

	private function sanitizeColor(?string $color): ?string {
		if ($color !== null && preg_match('/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/', $color)) {
			// dompdf does not understand 8-digit hex; drop the alpha channel.
			return substr($color, 0, 7);
		}
		return null;
	}
}

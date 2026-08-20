<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use DateTimeImmutable;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\CompanyLogo;
use OCA\Rechnungswerk\Service\DunningLetterService;
use OCP\Files\IRootFolder;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * Das Mahnschreiben rechnet mit Geld und Fristen — beides wird hier an festen
 * Daten festgehalten, damit ein Rechenfehler nicht erst dem Kunden auffaellt.
 */
class DunningLetterServiceTest extends TestCase {

	private DunningLetterService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->service = new DunningLetterService(
			new CompanyLogo($this->createMock(IRootFolder::class), $this->createMock(LoggerInterface::class)),
		);
	}

	private function settings(): Settings {
		$s = new Settings();
		$s->setOwnerUserId('__company__');
		$s->setCompanyName('Ingenieurbüro Leimkühler GmbH');
		$s->setCompanyAddress("Musterstraße 1\n12345 Musterstadt");
		$s->setIban('DE02120300000000202051');
		$s->setBic('BYLADEM1001');
		$s->setBankName('Musterbank');
		$s->setVatId('DE123456789');
		return $s;
	}

	private function invoice(): Invoice {
		$i = new Invoice();
		$i->setId(7);
		$i->setNumber('RE-2026-0042');
		$i->setInvoiceType(Invoice::TYPE_INVOICE);
		$i->setStatus(Invoice::STATUS_COMMITTED);
		$i->setRecipientName('Salzgitter Flachstahl GmbH');
		$i->setRecipientAddress('Eisenhüttenstraße 99');
		$i->setRecipientPostalCode('38239');
		$i->setRecipientCity('Salzgitter');
		$i->setIssueDate(new DateTime('2026-07-01'));
		$i->setDueDate(new DateTime('2026-07-15'));
		$i->setTotalCents(119000);
		return $i;
	}

	public function testFeeIsAddedToTheInvoiceTotal(): void {
		$settings = $this->settings();
		$settings->setDunningFee2Cents(500);

		$html = $this->service->renderHtml($this->invoice(), 2, $settings, new DateTimeImmutable('2026-08-20'));

		self::assertStringContainsString('1.190,00 €', $html, 'Rechnungsbetrag');
		self::assertStringContainsString('5,00 €', $html, 'Mahngebühr');
		self::assertStringContainsString('1.195,00 €', $html, 'Gesamtbetrag inkl. Gebühr');
	}

	public function testWithoutAFeeNoFeeRowIsPrinted(): void {
		$html = $this->service->renderHtml($this->invoice(), 1, $this->settings(), new DateTimeImmutable('2026-08-20'));

		self::assertStringNotContainsString('Mahngebühr', $html);
		self::assertStringContainsString('1.190,00 €', $html);
	}

	public function testOverdueDaysAreCountedFromTheInvoiceDueDate(): void {
		// 15.07. fällig, Schreiben vom 20.08. -> 36 Tage
		$html = $this->service->renderHtml($this->invoice(), 1, $this->settings(), new DateTimeImmutable('2026-08-20'));

		self::assertStringContainsString('>36<', $html);
	}

	public function testDueDateUsesTheConfiguredDeadline(): void {
		$settings = $this->settings();
		$settings->setDunningDueDays(10);

		$due = $this->service->dueDate($settings, new DateTimeImmutable('2026-08-20'));

		self::assertSame('2026-08-30', $due->format('Y-m-d'));
	}

	public function testDueDateFallsBackToSevenDays(): void {
		$due = $this->service->dueDate($this->settings(), new DateTimeImmutable('2026-08-20'));

		self::assertSame('2026-08-27', $due->format('Y-m-d'));
	}

	public function testWordingEscalatesWithTheLevel(): void {
		$settings = $this->settings();
		$today = new DateTimeImmutable('2026-08-20');

		self::assertStringContainsString('Zahlungserinnerung', $this->service->renderHtml($this->invoice(), 1, $settings, $today));
		self::assertStringContainsString('1. Mahnung', $this->service->renderHtml($this->invoice(), 2, $settings, $today));

		$third = $this->service->renderHtml($this->invoice(), 3, $settings, $today);
		self::assertStringContainsString('2. Mahnung', $third);
		self::assertStringContainsString('weitere Schritte', $third, 'erst Stufe 3 nennt Konsequenzen');
	}

	public function testRecipientNameIsEscaped(): void {
		$invoice = $this->invoice();
		$invoice->setRecipientName('Müller & Co <script>alert(1)</script>');

		$html = $this->service->renderHtml($invoice, 1, $this->settings(), new DateTimeImmutable('2026-08-20'));

		self::assertStringNotContainsString('<script>', $html);
		self::assertStringContainsString('&amp;', $html);
	}

	public function testFileNameCarriesNumberAndLevel(): void {
		self::assertSame('Mahnung_RE-2026-0042_Stufe2.pdf', $this->service->fileName($this->invoice(), 2));
	}

	public function testGeneratedPdfIsAPdf(): void {
		$pdf = $this->service->generatePdf($this->invoice(), 1, $this->settings(), new DateTimeImmutable('2026-08-20'));

		self::assertStringStartsWith('%PDF-', $pdf);
		self::assertGreaterThan(1000, strlen($pdf));
	}
}

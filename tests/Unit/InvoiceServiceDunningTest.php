<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItemMapper;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\ArchiveService;
use OCA\Rechnungswerk\Service\CountryService;
use OCA\Rechnungswerk\Service\DocumentStore;
use OCA\Rechnungswerk\Service\DunningLetterService;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\MailService;
use OCA\Rechnungswerk\Service\NumberFormatMessage;
use OCA\Rechnungswerk\Service\SettingsService;
use OCA\Rechnungswerk\Service\ZugferdService;
use OCP\IDBConnection;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * Mahnstufe (Hub-App-Integration): RechnungsWerk speichert nur, validiert den
 * Wertebereich und raeumt beim Bezahlen automatisch auf — die Eskalation
 * selbst pruefen diese Tests bewusst nicht, die liegt in der Hub-App.
 */
class InvoiceServiceDunningTest extends TestCase {

	use TranslatorStub;

	private InvoiceMapper $invoiceMapper;
	private IDBConnection $db;
	private InvoiceService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->db = $this->createMock(IDBConnection::class);

		$this->service = new InvoiceService(
			$this->invoiceMapper,
			$this->createMock(InvoiceItemMapper::class),
			$this->createMock(SettingsService::class),
			$this->createMock(ZugferdService::class),
			$this->createMock(ArchiveService::class),
			$this->createMock(DocumentStore::class),
			$this->createMock(MailService::class),
			$this->createMock(DunningLetterService::class),
			$this->createMock(CountryService::class),
			$this->db,
			$this->createMock(LoggerInterface::class),
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
		);
	}

	private function committedInvoice(): Invoice {
		$invoice = new Invoice();
		$invoice->setId(7);
		$invoice->setNumber('RE-2026-0007');
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setStatus(Invoice::STATUS_COMMITTED);
		$invoice->setRecipientName('Kunde AG');
		return $invoice;
	}

	public function testSetDunningLevelStoresLevelAndDate(): void {
		$invoice = $this->committedInvoice();
		$this->invoiceMapper->method('findOne')->willReturn($invoice);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($invoice);

		$result = $this->service->setDunningLevel(7, 1, '2026-08-19');

		self::assertSame(1, $result['dunningLevel']);
		self::assertSame('2026-08-19', $result['lastDunningAt']);
		// Manuell gesetzt gilt als behandelt, damit der taegliche Job diese
		// Stufe nicht am naechsten Lauf erneut vorschlaegt.
		self::assertSame(1, $invoice->getDunningNotifiedLevel());
	}

	public function testSetDunningLevelToZeroClearsLastDunningAt(): void {
		$invoice = $this->committedInvoice();
		$invoice->setDunningLevel(2);
		$invoice->setLastDunningAt(new DateTime('2026-08-01'));
		$this->invoiceMapper->method('findOne')->willReturn($invoice);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($invoice);

		$result = $this->service->setDunningLevel(7, 0);

		self::assertSame(0, $result['dunningLevel']);
		self::assertNull($result['lastDunningAt']);
	}

	public function testSetDunningLevelRejectsOutOfRangeValue(): void {
		$this->invoiceMapper->method('findOne')->willReturn($this->committedInvoice());

		$this->expectException(ValidationException::class);
		$this->service->setDunningLevel(7, 4);
	}

	public function testSetDunningLevelRejectsDraftInvoice(): void {
		$invoice = $this->committedInvoice();
		$invoice->setStatus(Invoice::STATUS_DRAFT);
		$this->invoiceMapper->method('findOne')->willReturn($invoice);

		$this->expectException(IllegalStateException::class);
		$this->service->setDunningLevel(7, 1);
	}

	public function testMarkPaidClearsAnActiveDunningLevel(): void {
		$invoice = $this->committedInvoice();
		$invoice->setDunningLevel(2);
		$invoice->setLastDunningAt(new DateTime('2026-08-01'));
		$invoice->setDunningNotifiedLevel(2);
		$this->invoiceMapper->method('findOne')->willReturn($invoice);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($invoice);

		$result = $this->service->markPaid(7, '2026-08-19');

		self::assertSame(0, $result['dunningLevel']);
		self::assertNull($result['lastDunningAt']);
		// Sonst wuerde eine erneut ueberfaellige Folgerechnung (oder ein Irrtum,
		// der rueckgaengig gemacht wird) keine neue Notification mehr bekommen.
		self::assertSame(0, $invoice->getDunningNotifiedLevel());
	}
}

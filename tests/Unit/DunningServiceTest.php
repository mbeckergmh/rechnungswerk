<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\DunningService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\SettingsService;
use OCP\IDBConnection;
use OCP\IGroupManager;
use OCP\IURLGenerator;
use OCP\Notification\IManager;
use OCP\Notification\INotification;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * Kernregel (Ingenieurbüro-Auftragswesen): Mahnabstand relativ zum
 * individuellen dueDate jeder Rechnung, Eskalation alle $intervalDays Tage,
 * genau eine Notification je neu erreichter Stufe — kein täglicher Spam,
 * solange niemand reagiert.
 */
class DunningServiceTest extends TestCase {

	use TranslatorStub;

	private InvoiceMapper $invoiceMapper;
	private SettingsService $settingsService;
	private PermissionService $permissionService;
	private IGroupManager $groupManager;
	private IDBConnection $db;
	private IManager $notificationManager;
	private DunningService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->settingsService = $this->createMock(SettingsService::class);
		$this->permissionService = $this->createMock(PermissionService::class);
		$this->groupManager = $this->createMock(IGroupManager::class);
		$this->db = $this->createMock(IDBConnection::class);
		$this->notificationManager = $this->createMock(IManager::class);

		// Keine Gruppen-Aufloesung noetig fuer diese Tests: 'admin'-Gruppe
		// existiert nicht, Empfaenger kommen ueber die konfigurierte Liste.
		$this->groupManager->method('get')->willReturn(null);
		$this->permissionService->method('getAdmins')->willReturn(['user:alice']);
		$this->permissionService->method('getUsers')->willReturn([]);

		$urlGenerator = $this->createMock(IURLGenerator::class);
		$urlGenerator->method('linkToRouteAbsolute')->willReturn('https://cloud.example/apps/rechnungswerk/');

		$this->service = new DunningService(
			$this->invoiceMapper,
			$this->settingsService,
			$this->permissionService,
			$this->groupManager,
			$this->db,
			$this->notificationManager,
			$urlGenerator,
			$this->createMock(LoggerInterface::class),
		);
	}

	/** Fluent Fake statt vollem Mock — INotification hat zu viele Setter, um sie einzeln zu konfigurieren. */
	private function fakeNotification(): INotification {
		return new class implements INotification {
			public function setApp(string $app): INotification { return $this; }
			public function getApp(): string { return 'rechnungswerk'; }
			public function setUser(string $user): INotification { return $this; }
			public function getUser(): string { return ''; }
			public function setDateTime(\DateTime $dateTime): INotification { return $this; }
			public function getDateTime(): \DateTime { return new \DateTime(); }
			public function setObject(string $type, string $id): INotification { return $this; }
			public function getObjectType(): string { return ''; }
			public function getObjectId(): string { return ''; }
			public function setSubject(string $subject, array $parameters = []): INotification { return $this; }
			public function getSubject(): string { return ''; }
			public function getSubjectParameters(): array { return []; }
			public function setParsedSubject(string $subject): INotification { return $this; }
			public function getParsedSubject(): string { return ''; }
			public function setRichSubject(string $subject, array $parameters = []): INotification { return $this; }
			public function getRichSubject(): string { return ''; }
			public function getRichSubjectParameters(): array { return []; }
			public function setMessage(string $message, array $parameters = []): INotification { return $this; }
			public function getMessage(): string { return ''; }
			public function getMessageParameters(): array { return []; }
			public function setParsedMessage(string $message): INotification { return $this; }
			public function getParsedMessage(): string { return ''; }
			public function setRichMessage(string $message, array $parameters = []): INotification { return $this; }
			public function getRichMessage(): string { return ''; }
			public function getRichMessageParameters(): array { return []; }
			public function setLink(string $link): INotification { return $this; }
			public function getLink(): string { return ''; }
			public function setIcon(string $icon): INotification { return $this; }
			public function getIcon(): string { return ''; }
			public function setPriorityNotification(bool $priorityNotification): INotification { return $this; }
			public function isPriorityNotification(): bool { return false; }
			public function createAction(): \OCP\Notification\IAction { throw new \RuntimeException('not needed'); }
			public function addAction(\OCP\Notification\IAction $action): INotification { return $this; }
			public function getActions(): array { return []; }
			public function addParsedAction(\OCP\Notification\IAction $action): INotification { return $this; }
			public function getParsedActions(): array { return []; }
			public function isValid(): bool { return true; }
			public function isValidParsed(): bool { return true; }
		};
	}

	private function overdueInvoice(int $daysOverdue): Invoice {
		$invoice = new Invoice();
		$invoice->setId(7);
		$invoice->setNumber('RE-2026-0007');
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setStatus(Invoice::STATUS_COMMITTED);
		$due = new DateTime();
		$due->setTime(0, 0, 0);
		$due->modify("-{$daysOverdue} days");
		$invoice->setDueDate($due);
		return $invoice;
	}

	private function settingsWithInterval(?int $days): Settings {
		$settings = new Settings();
		$settings->setDunningIntervalDays($days);
		return $settings;
	}

	public function testNotifiesOnceIntervalIsReached(): void {
		$invoice = $this->overdueInvoice(7);
		$this->invoiceMapper->method('findByTypes')->willReturn([$invoice]);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($invoice);
		$this->settingsService->method('getCompany')->willReturn($this->settingsWithInterval(7));
		$this->notificationManager->method('createNotification')->willReturn($this->fakeNotification());
		$this->notificationManager->expects($this->once())->method('notify');

		$sent = $this->service->proposeAndNotify();

		self::assertSame(1, $sent);
		self::assertSame(1, $invoice->getDunningNotifiedLevel());
	}

	public function testDoesNotNotifyBeforeIntervalIsReached(): void {
		$invoice = $this->overdueInvoice(3);
		$this->invoiceMapper->method('findByTypes')->willReturn([$invoice]);
		$this->settingsService->method('getCompany')->willReturn($this->settingsWithInterval(7));
		$this->notificationManager->expects($this->never())->method('notify');

		self::assertSame(0, $this->service->proposeAndNotify());
	}

	public function testDoesNotRenotifyForAnAlreadyNotifiedLevel(): void {
		$invoice = $this->overdueInvoice(10); // interval 7 -> level 1
		$invoice->setDunningNotifiedLevel(1);
		$this->invoiceMapper->method('findByTypes')->willReturn([$invoice]);
		$this->settingsService->method('getCompany')->willReturn($this->settingsWithInterval(7));
		$this->notificationManager->expects($this->never())->method('notify');

		self::assertSame(0, $this->service->proposeAndNotify());
	}

	public function testEscalatesToNextLevelOnceReached(): void {
		$invoice = $this->overdueInvoice(15); // interval 7 -> level 2
		$invoice->setDunningNotifiedLevel(1);
		$this->invoiceMapper->method('findByTypes')->willReturn([$invoice]);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($invoice);
		$this->settingsService->method('getCompany')->willReturn($this->settingsWithInterval(7));
		$this->notificationManager->method('createNotification')->willReturn($this->fakeNotification());
		$this->notificationManager->expects($this->once())->method('notify');

		self::assertSame(1, $this->service->proposeAndNotify());
		self::assertSame(2, $invoice->getDunningNotifiedLevel());
	}

	public function testSkipsPaidInvoices(): void {
		$invoice = $this->overdueInvoice(30);
		$invoice->setPaidAt(new DateTime('2026-08-01'));
		$this->invoiceMapper->method('findByTypes')->willReturn([$invoice]);
		$this->settingsService->method('getCompany')->willReturn($this->settingsWithInterval(7));
		$this->notificationManager->expects($this->never())->method('notify');

		self::assertSame(0, $this->service->proposeAndNotify());
	}

	public function testFallsBackToDefaultIntervalWhenNotConfigured(): void {
		$invoice = $this->overdueInvoice(7); // Default-Intervall ist ebenfalls 7
		$this->invoiceMapper->method('findByTypes')->willReturn([$invoice]);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($invoice);
		$this->settingsService->method('getCompany')->willReturn($this->settingsWithInterval(null));
		$this->notificationManager->method('createNotification')->willReturn($this->fakeNotification());
		$this->notificationManager->expects($this->once())->method('notify');

		self::assertSame(1, $this->service->proposeAndNotify());
	}

	public function testCapsAtHighestKnownLevel(): void {
		$invoice = $this->overdueInvoice(100); // weit über Stufe 3 hinaus
		$this->invoiceMapper->method('findByTypes')->willReturn([$invoice]);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($invoice);
		$this->settingsService->method('getCompany')->willReturn($this->settingsWithInterval(7));
		$this->notificationManager->method('createNotification')->willReturn($this->fakeNotification());

		$this->service->proposeAndNotify();

		self::assertSame(3, $invoice->getDunningNotifiedLevel());
	}
}

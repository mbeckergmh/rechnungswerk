<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Aktiver Mahnlauf (Ingenieurbuero-Auftragswesen): Version002000 legte nur das
 * Ergebnisfeld an (dunning_level), hier kommt hinzu, was der taegliche
 * Hintergrundjob (DunningProposalJob) braucht.
 *
 * dunning_interval_days ist eine Einstellung, kein Fixwert: Zahlungsziele sind
 * frei verhandelt (payment_term_days je Rechnung, #4a), also muss auch der
 * Mahnabstand konfigurierbar sein statt hart auf 7 Tage codiert. NULLable mit
 * Fallback 7 im Code (DunningService::DEFAULT_INTERVAL_DAYS) — derselbe
 * Nullable-plus-Fallback-Stil wie default_payment_term_days.
 *
 * dunning_notified_level haelt fest, fuer welche Stufe zuletzt eine
 * Notification rausging — getrennt von dunning_level (der vom Menschen
 * bestaetigten Stufe). Ohne dieses Feld wuerde der taeglich laufende Job
 * dieselbe Vorschlags-Notification jeden Tag neu erzeugen, solange die
 * Rechnung ueberfaellig bleibt und niemand reagiert.
 */
class Version002100Date20260819180000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.21.0 (Mahnlauf: Intervall-Einstellung + Notify-Tracking)';
	}

	public function description(): string {
		return 'Add rechnungswerk_settings.dunning_interval_days and rechnungswerk_invoice.dunning_notified_level for the daily dunning-proposal background job.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();
		$changed = false;

		if ($schema->hasTable('rechnungswerk_settings')) {
			$table = $schema->getTable('rechnungswerk_settings');
			if (!$table->hasColumn('dunning_interval_days')) {
				$table->addColumn('dunning_interval_days', Types::INTEGER, ['notnull' => false, 'default' => null]);
				$changed = true;
			}
		}

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			if (!$table->hasColumn('dunning_notified_level')) {
				$table->addColumn('dunning_notified_level', Types::SMALLINT, ['notnull' => true, 'default' => 0]);
				$changed = true;
			}
		}

		return $changed ? $schema : null;
	}
}

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
 * Mahnschreiben: Gebuehren je Stufe und Zahlungsfrist der Mahnung.
 *
 * Die Gebuehr ist eine Pauschale je Mahnstufe (kein Verzugszins-Rechner):
 * drei Betraege in Cent, konsistent mit der uebrigen Geldhaltung der App.
 * Getrennte Spalten statt einer JSON-Liste, weil die Anzahl der Stufen mit
 * Invoice::DUNNING_LEVELS fest bei drei liegt und Einzelspalten sich ohne
 * Parsing abfragen und in den Einstellungen binden lassen.
 *
 * dunning_due_days ist die NEUE Frist, die das Mahnschreiben setzt ("zahlbar
 * bis in X Tagen") — bewusst getrennt vom urspruenglichen Zahlungsziel der
 * Rechnung (payment_term_days) und vom Abstand zwischen den Stufen
 * (dunning_interval_days). Alle drei sind verschiedene Fristen und wurden
 * beim Entwurf leicht verwechselt.
 */
class Version002200Date20260820060000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.22.0 (Mahnschreiben: Gebuehren und Zahlungsfrist)';
	}

	public function description(): string {
		return 'Add rechnungswerk_settings.dunning_fee1_cents/2/3 and dunning_due_days for the dunning letter PDF.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_settings')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_settings');
		$changed = false;

		foreach (['dunning_fee1_cents', 'dunning_fee2_cents', 'dunning_fee3_cents'] as $column) {
			if (!$table->hasColumn($column)) {
				$table->addColumn($column, Types::INTEGER, ['notnull' => false, 'default' => null]);
				$changed = true;
			}
		}

		if (!$table->hasColumn('dunning_due_days')) {
			$table->addColumn('dunning_due_days', Types::INTEGER, ['notnull' => false, 'default' => null]);
			$changed = true;
		}

		return $changed ? $schema : null;
	}
}

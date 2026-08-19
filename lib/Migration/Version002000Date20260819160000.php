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
 * Mahnstufe je Rechnung (Ingenieurbuero-Auftragswesen, Hub-App-Integration).
 *
 * Faelligkeit (dueDate) und Zahlungsstatus (paidAt / paymentStatus) tragen die
 * Rechnung bereits (#4a/#117). Was fehlt, ist die Mahnstufe selbst: eine
 * externe Hub-App soll ueberfaellige Rechnungen erkennen, eine Mahnstufe
 * vorschlagen und nach Freigabe hier ablegen. Die Eskalationslogik (wann von
 * Stufe 1 auf 2, welche Frist) bleibt bewusst ausserhalb von RechnungsWerk;
 * gespeichert wird nur das Ergebnis.
 *
 * dunning_level ist NOT NULL mit Default 0 (keine Mahnung) statt NULLable wie
 * paidAt — anders als "noch nicht bezahlt" (paidAt IS NULL) gibt es keinen
 * sinnvollen dritten Zustand zwischen "keine Mahnung" und "Stufe 1..3", ein
 * fester Nullwert vermeidet Sonderfall-Abfragen in der Hub-App.
 */
class Version002000Date20260819160000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.20.0 (Mahnstufe)';
	}

	public function description(): string {
		return 'Add rechnungswerk_invoice.dunning_level and last_dunning_at for the dunning workflow proposed by the external hub app.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_invoice')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_invoice');

		if (!$table->hasColumn('dunning_level')) {
			$table->addColumn('dunning_level', Types::SMALLINT, ['notnull' => true, 'default' => 0]);
		}

		if (!$table->hasColumn('last_dunning_at')) {
			$table->addColumn('last_dunning_at', Types::DATE, ['notnull' => false, 'default' => null]);
		}

		return $schema;
	}
}

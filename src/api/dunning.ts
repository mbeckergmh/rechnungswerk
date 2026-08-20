/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { apiGet } from './client'
import type { DunningEntry } from '@/types/api'

/**
 * Arbeitsliste der Mahnungs-Übersicht: offene Posten mit Verzug, gesetzter und
 * fälliger Mahnstufe, dringendstes zuerst.
 */
export const listDunning = (): Promise<DunningEntry[]> =>
	apiGet<DunningEntry[]>('/dunning')

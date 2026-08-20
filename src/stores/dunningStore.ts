/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { listDunning } from '@/api/dunning'
import type { DunningEntry } from '@/types/api'

export const useDunningStore = defineStore('dunning', () => {
	const entries = ref<DunningEntry[]>([])
	const loading = ref(false)

	async function fetchAll(): Promise<void> {
		loading.value = true
		try {
			entries.value = await listDunning()
		} finally {
			loading.value = false
		}
	}

	/**
	 * Zähler für die Navigation: nur Posten, bei denen wirklich etwas ansteht —
	 * eine Stufe ist fällig, die noch nicht gesetzt ist. Sonst stünde dort
	 * dauerhaft eine Zahl, die niemanden mehr zum Handeln bewegt.
	 */
	const actionableCount = computed(() =>
		entries.value.filter(e => e.scheduledLevel > e.dunningLevel).length)

	const overdueCount = computed(() => entries.value.filter(e => e.daysOverdue > 0).length)

	return { entries, loading, fetchAll, actionableCount, overdueCount }
})

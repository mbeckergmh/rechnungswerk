<template>
	<div class="rw-view">
		<div class="rw-view__head">
			<h2>{{ t('rechnungswerk', 'Mahnungen') }}</h2>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcEmptyContent v-if="!store.loading && store.entries.length === 0"
			:name="t('rechnungswerk', 'Keine offenen Posten')"
			:description="t('rechnungswerk', 'Alle festgeschriebenen Rechnungen sind bezahlt.')">
			<template #icon><CheckCircleOutlineIcon :size="20" /></template>
		</NcEmptyContent>

		<div v-else-if="store.entries.length > 0">
			<div class="rw-filterbar">
				<button v-for="f in FILTERS" :key="f.key"
					:class="['rw-chip', { 'rw-chip--active': filter === f.key, 'rw-chip--overdue': f.key === 'due' }]"
					@click="filter = f.key">
					{{ t('rechnungswerk', f.label) }} <span class="rw-chip__n">{{ counts[f.key] }}</span>
				</button>
				<span v-if="openTotalCents > 0" class="rw-chip rw-chip--sum">
					{{ t('rechnungswerk', 'Offen gesamt:') }} <strong>{{ formatCents(openTotalCents) }}</strong>
				</span>
			</div>

			<div class="rw-table-wrap">
			<table class="rw-table">
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Nummer') }}</th>
						<th>{{ t('rechnungswerk', 'Empfänger') }}</th>
						<th>{{ t('rechnungswerk', 'Fällig am') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Verzug') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Brutto') }}</th>
						<th class="rw-col-dunning">{{ t('rechnungswerk', 'Mahnstufe') }}</th>
						<th class="rw-col-actions"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="e in filteredEntries" :key="e.id"
						:class="['rw-row-clickable', { 'rw-row--overdue': e.daysOverdue > 0 }]"
						@click="openInvoice(e.id)">
						<td>{{ e.number ?? '—' }}</td>
						<td>{{ e.recipientName ?? '—' }}</td>
						<td>{{ formatDate(e.dueDate) }}</td>
						<td class="num">
							<span :class="{ 'rw-amt-overdue': e.daysOverdue > 0 }">{{ overdueLabel(e) }}</span>
						</td>
						<td class="num">
							<span :class="{ 'rw-amt-overdue': e.daysOverdue > 0 }">{{ formatCents(e.totalCents) }}</span>
						</td>
						<td class="rw-col-dunning">
							<select :class="['rw-dunning-select', { 'rw-dunning-select--active': e.dunningLevel > 0 }]"
								:value="e.dunningLevel"
								:title="dunningTitle(e)"
								@click.stop
								@change="onDunningChange(e, $event)">
								<option :value="0">–</option>
								<option :value="1">{{ t('rechnungswerk', 'Stufe 1') }}</option>
								<option :value="2">{{ t('rechnungswerk', 'Stufe 2') }}</option>
								<option :value="3">{{ t('rechnungswerk', 'Stufe 3') }}</option>
							</select>
							<div v-if="e.scheduledLevel > e.dunningLevel" class="rw-subline rw-subline--overdue">
								{{ t('rechnungswerk', 'Stufe {level} fällig', { level: String(e.scheduledLevel) }) }}
							</div>
						</td>
						<td class="rw-col-actions">
							<div class="rw-actions">
								<NcButton v-if="e.scheduledLevel > e.dunningLevel"
									variant="secondary"
									:aria-label="t('rechnungswerk', 'Vorgeschlagene Mahnstufe übernehmen')"
									:title="t('rechnungswerk', 'Vorgeschlagene Mahnstufe übernehmen')"
									@click.stop="acceptProposal(e)">
									{{ t('rechnungswerk', 'Übernehmen') }}
								</NcButton>
								<NcButton v-if="e.dunningLevel > 0"
									variant="tertiary"
									:aria-label="t('rechnungswerk', 'Mahnschreiben herunterladen')"
									:title="t('rechnungswerk', 'Mahnschreiben herunterladen')"
									@click.stop="downloadDunning(e.id)">
									<template #icon><EmailAlertOutlineIcon :size="20" /></template>
								</NcButton>
								<NcButton variant="tertiary"
									:aria-label="t('rechnungswerk', 'Als bezahlt markieren')"
									:title="t('rechnungswerk', 'Als bezahlt markieren')"
									@click.stop="markPaid(e)">
									<template #icon><CheckboxBlankOutlineIcon :size="20" /></template>
								</NcButton>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import CheckCircleOutlineIcon from 'vue-material-design-icons/CheckCircleOutline.vue'
import EmailAlertOutlineIcon from 'vue-material-design-icons/EmailAlertOutline.vue'
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import { useDunningStore } from '@/stores/dunningStore'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { downloadDunningPdf } from '@/api/invoices'
import type { DunningEntry } from '@/types/api'
import { formatCents } from '@/utils/money'

const router = useRouter()
const store = useDunningStore()
const invoiceStore = useInvoiceStore()
const error = ref('')

type DunningFilter = 'all' | 'due' | 'overdue'
const FILTERS: { key: DunningFilter, label: string }[] = [
	{ key: 'all', label: 'Alle offenen' },
	{ key: 'due', label: 'Mahnung fällig' },
	{ key: 'overdue', label: 'Überfällig' },
]
const filter = ref<DunningFilter>('all')

const isActionable = (e: DunningEntry): boolean => e.scheduledLevel > e.dunningLevel

const counts = computed<Record<DunningFilter, number>>(() => ({
	all: store.entries.length,
	due: store.entries.filter(isActionable).length,
	overdue: store.entries.filter(e => e.daysOverdue > 0).length,
}))

const filteredEntries = computed(() => {
	switch (filter.value) {
	case 'due': return store.entries.filter(isActionable)
	case 'overdue': return store.entries.filter(e => e.daysOverdue > 0)
	default: return store.entries
	}
})

const openTotalCents = computed(() =>
	filteredEntries.value.reduce((sum, e) => sum + e.totalCents, 0))

function formatDate(iso: string | null): string {
	if (!iso) {
		return '—'
	}
	// Datumsangaben ohne Uhrzeit an lokalem Mittag lesen, sonst rutschen sie in
	// Zeitzonen westlich von UTC um einen Tag (wie in InvoicesView).
	return new Date(`${iso}T12:00:00`).toLocaleDateString()
}

function overdueLabel(e: DunningEntry): string {
	if (e.daysOverdue <= 0) {
		return t('rechnungswerk', 'nicht fällig')
	}
	return e.daysOverdue === 1
		? t('rechnungswerk', '1 Tag')
		: t('rechnungswerk', '{days} Tage', { days: String(e.daysOverdue) })
}

function dunningTitle(e: DunningEntry): string {
	if (e.dunningLevel === 0 || !e.lastDunningAt) {
		return t('rechnungswerk', 'Noch keine Mahnstufe gesetzt')
	}
	return t('rechnungswerk', 'Mahnstufe {level} seit {date}', {
		level: String(e.dunningLevel),
		date: new Date(`${e.lastDunningAt}T12:00:00`).toLocaleDateString(),
	})
}

async function setLevel(e: DunningEntry, level: number) {
	error.value = ''
	try {
		await invoiceStore.setDunningLevel(e.id, level)
		await store.fetchAll()
	} catch (err) {
		error.value = (err as { message?: string }).message ?? t('rechnungswerk', 'Mahnstufe konnte nicht gesetzt werden')
	}
}

const onDunningChange = (e: DunningEntry, event: Event) =>
	setLevel(e, Number((event.target as HTMLSelectElement).value))

const acceptProposal = (e: DunningEntry) => setLevel(e, e.scheduledLevel)

function downloadDunning(id: number) {
	downloadDunningPdf(id)
}

async function markPaid(e: DunningEntry) {
	error.value = ''
	try {
		await invoiceStore.markPaid(e.id)
		await store.fetchAll()
	} catch (err) {
		error.value = (err as { message?: string }).message ?? t('rechnungswerk', 'Zahlungsstatus konnte nicht geändert werden')
	}
}

function openInvoice(id: number) {
	router.push({ name: 'invoice-detail', params: { id: String(id) } })
}

onMounted(() => {
	store.fetchAll().catch((e: { message?: string }) => {
		error.value = e.message ?? t('rechnungswerk', 'Laden fehlgeschlagen')
	})
})
</script>

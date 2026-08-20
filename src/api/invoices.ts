/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { Invoice, InvoiceDetail } from '@/types/api'
import { apiDelete, apiGet, apiPatch, apiPost, apiUrl } from './client'

export interface InvoiceItemInput {
	productId?: number | null
	name: string
	description?: string | null
	quantity: string
	unitCode: string
	unitLabel?: string | null
	/**
	 * Einzelpreis als Rohtext, so wie eingegeben ("95", "0,3456", "1.234,56").
	 * Der Server rechnet um und prüft; er nimmt bewusst KEINE vorberechnete
	 * Zahl mehr entgegen, weil einer Zahl nicht anzusehen ist, ob 95 als
	 * 0,0095 € oder als 95 € gemeint war (#180).
	 */
	unitPriceInput: string
	taxRateBp: number
}

export interface InvoiceInput {
	customerId?: number | null
	recipientName?: string | null
	recipientContactId?: string | null
	recipientAddress?: string | null
	recipientPostalCode?: string | null
	recipientCity?: string | null
	recipientCountry?: string | null
	recipientEmail?: string | null
	recipientVatId?: string | null
	recipientContactPerson?: string | null
	recipientPhone?: string | null
	sellerContactPerson?: string | null
	sellerContactPhone?: string | null
	sellerContactEmail?: string | null
	performanceDate?: string | null
	performancePeriodStart?: string | null
	performancePeriodEnd?: string | null
	referenceNumber?: string | null
	orderNumber?: string | null
	buyerReference?: string | null
	contractNumber?: string | null
	projectReference?: string | null
	specialTaxCase?: string | null
	greeting?: string | null
	extraText?: string | null
	notes?: string[]
	paymentTermDays?: number | null
	discountTerms?: string | null
	/** Quote validity date "gültig bis" (#111); quotes only. */
	validUntil?: string | null
	/** Freibleibend/unverbindlich flag (§145 BGB, #111); quotes only. */
	offerFreeform?: boolean
	items?: InvoiceItemInput[]
}

export const listInvoices = (): Promise<Invoice[]> =>
	apiGet<Invoice[]>('/invoices')

export const getInvoice = (id: number): Promise<InvoiceDetail> =>
	apiGet<InvoiceDetail>(`/invoices/${id}`)

export const createInvoice = (data: InvoiceInput): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, { data: InvoiceInput }>('/invoices', { data })

export const updateInvoice = (id: number, data: InvoiceInput): Promise<InvoiceDetail> =>
	apiPatch<InvoiceDetail, { data: InvoiceInput }>(`/invoices/${id}`, { data })

export const deleteInvoice = (id: number): Promise<void> =>
	apiDelete(`/invoices/${id}`)

export const commitInvoice = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/invoices/${id}/commit`, {})

export const cancelInvoice = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/invoices/${id}/cancel`, {})

/** Clone any invoice into a fresh, editable draft (#124) and return it. */
export const duplicateInvoice = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/invoices/${id}/duplicate`, {})

/** Mark a committed invoice as paid (#117); date defaults to today (YYYY-MM-DD). */
export const markInvoicePaid = (id: number, date?: string): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, { date?: string }>(`/invoices/${id}/pay`, date ? { date } : {})

/** Undo a recorded payment (#117); the invoice is open again. */
export const markInvoiceUnpaid = (id: number): Promise<InvoiceDetail> =>
	apiPost<InvoiceDetail, Record<string, never>>(`/invoices/${id}/unpay`, {})

/** Mahnstufe setzen (0..3); 0 löscht die Mahnstufe wieder (kein separater Reset-Endpunkt). */
export const setInvoiceDunningLevel = (id: number, level: number): Promise<InvoiceDetail> =>
	apiPatch<InvoiceDetail, { level: number }>(`/invoices/${id}/dunning`, { level })

/** Same-origin URL of the ZUGFeRD PDF for a committed invoice (session-authenticated). */
export const invoicePdfUrl = (id: number): string =>
	apiUrl(`/invoices/${id}/pdf`)

/**
 * Same-origin URL of the watermarked draft-preview PDF. The cache-buster
 * forces the iframe to re-fetch after every edit — the URL would otherwise
 * be identical across previews of the same draft.
 */
export const invoicePreviewUrl = (id: number): string =>
	apiUrl(`/invoices/${id}/preview`) + '?t=' + Date.now()

/**
 * Trigger a browser download of the invoice PDF. Uses a transient anchor with
 * the `download` attribute rather than window.open() — the latter flickers a
 * blank tab and is throttled by popup blockers; the anchor lets the server's
 * `Content-Disposition: attachment` save the file in place.
 */
export const downloadInvoicePdf = (id: number): void => {
	const a = document.createElement('a')
	a.href = invoicePdfUrl(id)
	a.download = ''
	a.rel = 'noopener'
	a.style.display = 'none'
	document.body.appendChild(a)
	a.click()
	a.remove()
}

/** Mahnschreiben zur aktuell gesetzten Mahnstufe (ohne Stufe: 409). */
export const dunningPdfUrl = (id: number): string =>
	apiUrl(`/invoices/${id}/dunning/pdf`)

export const downloadDunningPdf = (id: number): void => {
	const a = document.createElement('a')
	a.href = dunningPdfUrl(id)
	a.download = ''
	a.rel = 'noopener'
	a.style.display = 'none'
	document.body.appendChild(a)
	a.click()
	a.remove()
}

/** Mahnschreiben per E-Mail senden — nur auf Knopfdruck. */
export const sendDunningLetter = (id: number, to: string, subject: string, body: string): Promise<{ sent: boolean }> =>
	apiPost<{ sent: boolean }, { to: string, subject: string, body: string }>(`/invoices/${id}/dunning/send`, { to, subject, body })

export interface InvoiceSendInput {
	to: string
	subject: string
	body: string
}

export const sendInvoice = (id: number, data: InvoiceSendInput): Promise<{ sent: boolean }> =>
	apiPost<{ sent: boolean }, InvoiceSendInput>(`/invoices/${id}/send`, data)

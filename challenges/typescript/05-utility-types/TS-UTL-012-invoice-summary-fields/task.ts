export interface Invoice {
  id: string;
  total: number;
  currency: "USD" | "EUR";
  status: "draft" | "paid";
  customerNote: string;
  lineItems: Array<{ sku: string; quantity: number }>;
}

export type InvoiceSummary = Invoice;

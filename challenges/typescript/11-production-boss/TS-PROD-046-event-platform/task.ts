export type Events =
  | { type: "invoice.created"; invoiceId: string; total: number }
  | { type: "invoice.paid"; invoiceId: string; paidAt: Date };

// TODO: compose the application contract from the specification.
export type EventPlatform<U extends { type: PropertyKey }> = unknown;

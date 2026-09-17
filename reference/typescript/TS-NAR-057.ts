export type PaymentState =
  | { status: "pending"; receiptId?: never; error?: never }
  | { status: "paid"; receiptId: string; error?: never }
  | { status: "failed"; error: string; receiptId?: never };

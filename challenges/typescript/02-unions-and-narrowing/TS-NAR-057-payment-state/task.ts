export type PaymentState = | {
  status: "paid";
  receiptId: string;
  error?: never;
} | {
  status: "failed"
  receiptId?: never,
  error: string
} | {
  status: "pending",
  receiptId?: never,
  error?: never
};

export type PaymentState = {
  status: "pending" | "paid" | "failed";
  receiptId?: string;
  error?: string;
};

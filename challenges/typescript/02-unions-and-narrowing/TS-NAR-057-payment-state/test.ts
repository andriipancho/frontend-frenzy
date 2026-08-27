import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PaymentState } from "./task.js";

type Expected =
  | { status: "pending"; receiptId?: never; error?: never }
  | { status: "paid"; receiptId: string; error?: never }
  | { status: "failed"; error: string; receiptId?: never };
type Cases = [Expect<Equal<PaymentState, Expected>>];
// @ts-expect-error paid requires a receipt
const invalid: PaymentState = { status: "paid" };
void invalid;
export type TestCases = Cases;

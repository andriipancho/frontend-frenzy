import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { InvoiceSummary } from "./task.js";

type Expected = {
  id: string;
  total: number;
  currency: "USD" | "EUR";
  status: "draft" | "paid";
};
type Cases = [Expect<Equal<InvoiceSummary, Expected>>];
export type TestCases = Cases;

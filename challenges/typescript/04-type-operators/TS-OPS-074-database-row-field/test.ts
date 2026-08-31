import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { readRowField } from "./task.js";

const email = readRowField(
  { id: "u1", email: "ada@example.com", active: true },
  "users",
  "email",
);
const paidAt = readRowField(
  { id: "i1", total: 20, paidAt: null },
  "invoices",
  "paidAt",
);
type Cases = [
  Expect<Equal<typeof email, string>>,
  Expect<Equal<typeof paidAt, Date | null>>,
];
// @ts-expect-error invoices have no email field
readRowField({ id: "i1", total: 20, paidAt: null }, "invoices", "email");
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParsedEventName } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParsedEventName<"billing.invoice.paid">,
      { domain: "billing"; entity: "invoice"; action: "paid" }
    >
  >,
  Expect<
    Equal<
      ParsedEventName<"invalid">,
      never
    >
  >,
];

export type TestCases = Cases;

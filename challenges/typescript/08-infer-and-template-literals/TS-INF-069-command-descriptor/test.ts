import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CommandDescriptor } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CommandDescriptor<"user.create">,
      { domain: "user"; action: "create" }
    >
  >,
  Expect<
    Equal<
      CommandDescriptor<"billing.invoice.paid">,
      { domain: "billing"; action: "invoice.paid" }
    >
  >,
  Expect<
    Equal<
      CommandDescriptor<"invalid">,
      never
    >
  >,
];

export type TestCases = Cases;

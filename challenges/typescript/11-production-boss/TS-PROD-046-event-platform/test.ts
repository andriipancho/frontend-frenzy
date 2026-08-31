import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventPlatform, Events } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EventPlatform<Events>,
      { publish<E extends Events>(event: E): void; handlers: { "invoice.created": (event: { type: "invoice.created"; invoiceId: string; total: number }) => Promise<void> | void; "invoice.paid": (event: { type: "invoice.paid"; invoiceId: string; paidAt: Date }) => Promise<void> | void } }
    >
  >,
];

export type TestCases = Cases;

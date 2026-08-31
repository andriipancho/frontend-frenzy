import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeliveryPayload } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeliveryPayload<{ channel: "email"; payload: { to: string } } | { channel: "sms"; payload: { phone: string } }, "sms">,
      { phone: string }
    >
  >,
  Expect<
    Equal<
      DeliveryPayload<{ channel: "push"; payload: string } | { channel: "email"; payload: { html: string } }, "push" | "email">,
      string | { html: string }
    >
  >,
];

export type TestCases = Cases;

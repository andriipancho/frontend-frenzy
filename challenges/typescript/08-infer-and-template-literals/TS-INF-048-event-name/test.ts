import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NamespacedEvent } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NamespacedEvent<"user:created">,
      "created"
    >
  >,
  Expect<
    Equal<
      NamespacedEvent<"billing:invoice:paid">,
      "invoice:paid"
    >
  >,
  Expect<
    Equal<
      NamespacedEvent<"ready">,
      "ready"
    >
  >,
];

export type TestCases = Cases;

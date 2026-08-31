import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventNamespace } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EventNamespace<"user:created">,
      "user"
    >
  >,
  Expect<
    Equal<
      EventNamespace<"billing:invoice:paid">,
      "billing"
    >
  >,
  Expect<
    Equal<
      EventNamespace<"ready">,
      never
    >
  >,
];

export type TestCases = Cases;

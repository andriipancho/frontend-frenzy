import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MessagePriority } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MessagePriority<{ urgent: true; retry: 3 }>,
      "critical"
    >
  >,
  Expect<
    Equal<
      MessagePriority<{ retry: 2 }>,
      "retryable"
    >
  >,
  Expect<
    Equal<
      MessagePriority<{ silent: true } | { text: string }>,
      "background" | "normal"
    >
  >,
];

export type TestCases = Cases;

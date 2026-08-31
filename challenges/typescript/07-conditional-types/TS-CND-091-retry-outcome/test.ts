import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RetryOutcome } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RetryOutcome<string, Error, 0>,
      { ok: false; error: Error; retried: false }
    >
  >,
  Expect<
    Equal<
      RetryOutcome<number, "timeout", 3>,
      { ok: true; value: number; attempts: 3 } | { ok: false; error: "timeout"; retried: true }
    >
  >,
];

export type TestCases = Cases;

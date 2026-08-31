import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FailureError } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FailureError<{ ok: true; data: string } | { ok: false; error: Error }>,
      Error
    >
  >,
  Expect<
    Equal<
      FailureError<{ ok: false; error: "timeout" | "offline" }>,
      "timeout" | "offline"
    >
  >,
  Expect<
    Equal<
      FailureError<{ ok: true; data: number }>,
      never
    >
  >,
];

export type TestCases = Cases;

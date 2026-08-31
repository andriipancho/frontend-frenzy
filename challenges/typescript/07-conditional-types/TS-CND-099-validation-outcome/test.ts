import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ValidationOutcome } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ValidationOutcome<{ id: string }, true>,
      { valid: true; value: { id: string } }
    >
  >,
  Expect<
    Equal<
      ValidationOutcome<number, false>,
      { valid: false; input: unknown; issues: readonly string[] }
    >
  >,
];

export type TestCases = Cases;

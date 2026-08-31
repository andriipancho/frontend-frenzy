import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CallableOnly } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CallableOnly<(id: string) => number>,
      (id: string) => number
    >
  >,
  Expect<
    Equal<
      CallableOnly<string>,
      never
    >
  >,
  Expect<
    Equal<
      CallableOnly<(() => void) | { run: true }>,
      () => void
    >
  >,
];

export type TestCases = Cases;

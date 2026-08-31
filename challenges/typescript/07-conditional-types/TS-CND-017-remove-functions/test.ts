import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WithoutFunctions } from "./task.js";

type Cases = [
  Expect<
    Equal<
      WithoutFunctions<string | (() => void) | { run: true }>,
      string | { run: true }
    >
  >,
  Expect<
    Equal<
      WithoutFunctions<(id: string) => number>,
      never
    >
  >,
];

export type TestCases = Cases;

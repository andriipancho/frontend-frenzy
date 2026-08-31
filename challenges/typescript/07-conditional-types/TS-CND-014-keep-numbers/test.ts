import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeepNumbers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KeepNumbers<1 | "x" | 2 | true>,
      1 | 2
    >
  >,
  Expect<
    Equal<
      KeepNumbers<string | null>,
      never
    >
  >,
];

export type TestCases = Cases;

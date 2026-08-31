import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnwrapArrayProperties } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnwrapArrayProperties<{ tags: readonly string[]; count: number; pair: [1, 2] }>,
      { tags: string; count: number; pair: 1 | 2 }
    >
  >,
  Expect<
    Equal<
      UnwrapArrayProperties<{}>,
      {}
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GetterResults } from "./task.js";

type Cases = [
  Expect<
    Equal<
      GetterResults<{ getName: () => string; getCount: () => number; reset: () => void }>,
      { name: string; count: number }
    >
  >,
];

export type TestCases = Cases;

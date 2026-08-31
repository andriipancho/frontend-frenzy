import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RecursiveLast } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RecursiveLast<[1,2,3]>,
      3
    >
  >,
  Expect<
    Equal<
      RecursiveLast<readonly ["only"]>,
      "only"
    >
  >,
  Expect<
    Equal<
      RecursiveLast<[]>,
      never
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnionElements } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnionElements<string[]|readonly [1,2]|number>,
      string|1|2
    >
  >,
];
export type TestCases = Cases;

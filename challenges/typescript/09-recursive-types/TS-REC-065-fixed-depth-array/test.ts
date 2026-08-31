import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ArrayToDepth } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ArrayToDepth<string,3>,
      string[][][]
    >
  >,
  Expect<
    Equal<
      ArrayToDepth<number,1>,
      number[]
    >
  >,
  Expect<
    Equal<
      ArrayToDepth<boolean,0>,
      boolean
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepArrayItems } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepArrayItems<{tags:string[][];nested:{ids:number[]}}>,
      {tags:string;nested:{ids:number}}
    >
  >,
  Expect<
    Equal<
      DeepArrayItems<readonly [1,2]>,
      1|2
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepReadonlyArrays } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepReadonlyArrays<{groups:string[][];meta:{ids:number[]}}>,
      {groups:ReadonlyArray<ReadonlyArray<string>>;meta:{ids:ReadonlyArray<number>}}
    >
  >,
  Expect<
    Equal<
      DeepReadonlyArrays<string>,
      string
    >
  >,
];

export type TestCases = Cases;

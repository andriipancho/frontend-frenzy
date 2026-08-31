import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ReverseTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ReverseTuple<[1,2,3]>,
      [3,2,1]
    >
  >,
  Expect<
    Equal<
      ReverseTuple<readonly ["a","b"]>,
      ["b","a"]
    >
  >,
  Expect<
    Equal<
      ReverseTuple<[]>,
      []
    >
  >,
];

export type TestCases = Cases;

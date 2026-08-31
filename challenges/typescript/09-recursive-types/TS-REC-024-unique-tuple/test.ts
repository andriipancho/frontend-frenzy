import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UniqueTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UniqueTuple<[1,2,1,3,2]>,
      [1,2,3]
    >
  >,
  Expect<
    Equal<
      UniqueTuple<["a","a"]>,
      ["a"]
    >
  >,
  Expect<
    Equal<
      UniqueTuple<[]>,
      []
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FlattenTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FlattenTuple<[1,[2,[3]],4]>,
      [1,2,3,4]
    >
  >,
  Expect<
    Equal<
      FlattenTuple<[["a"],[]]>,
      ["a"]
    >
  >,
  Expect<
    Equal<
      FlattenTuple<[]>,
      []
    >
  >,
];

export type TestCases = Cases;

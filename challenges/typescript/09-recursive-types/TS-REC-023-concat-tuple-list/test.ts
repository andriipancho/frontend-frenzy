import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ConcatTupleList } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ConcatTupleList<[[1,2],[3],[4,5]]>,
      [1,2,3,4,5]
    >
  >,
  Expect<
    Equal<
      ConcatTupleList<[[],["a"]]>,
      ["a"]
    >
  >,
  Expect<
    Equal<
      ConcatTupleList<[]>,
      []
    >
  >,
];

export type TestCases = Cases;

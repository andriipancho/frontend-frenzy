import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ZipTuples } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ZipTuples<[1,2],["a","b"]>,
      [[1,"a"],[2,"b"]]
    >
  >,
  Expect<
    Equal<
      ZipTuples<[1,2,3],[true]>,
      [[1,true]]
    >
  >,
  Expect<
    Equal<
      ZipTuples<[],[1]>,
      []
    >
  >,
];

export type TestCases = Cases;

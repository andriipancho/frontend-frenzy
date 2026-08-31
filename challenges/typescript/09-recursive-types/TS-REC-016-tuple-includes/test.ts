import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TupleIncludes } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TupleIncludes<[1,2,3],2>,
      true
    >
  >,
  Expect<
    Equal<
      TupleIncludes<[1,2,3],4>,
      false
    >
  >,
  Expect<
    Equal<
      TupleIncludes<[1|2],1>,
      false
    >
  >,
];

export type TestCases = Cases;

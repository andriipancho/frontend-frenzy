import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DropTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DropTuple<[1,2,3,4],2>,
      [3,4]
    >
  >,
  Expect<
    Equal<
      DropTuple<[1],3>,
      []
    >
  >,
  Expect<
    Equal<
      DropTuple<[1,2],0>,
      [1,2]
    >
  >,
];

export type TestCases = Cases;

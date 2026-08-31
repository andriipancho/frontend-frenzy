import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TakeTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TakeTuple<[1,2,3,4],2>,
      [1,2]
    >
  >,
  Expect<
    Equal<
      TakeTuple<[1],3>,
      [1]
    >
  >,
  Expect<
    Equal<
      TakeTuple<[1,2],0>,
      []
    >
  >,
];

export type TestCases = Cases;

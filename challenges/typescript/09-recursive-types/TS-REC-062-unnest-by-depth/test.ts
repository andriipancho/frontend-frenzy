import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnnestValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnnestValue<{value:{value:string}},2>,
      string
    >
  >,
  Expect<
    Equal<
      UnnestValue<{value:number},3>,
      number
    >
  >,
  Expect<
    Equal<
      UnnestValue<boolean,0>,
      boolean
    >
  >,
];

export type TestCases = Cases;

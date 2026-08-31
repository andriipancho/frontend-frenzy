import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NestValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NestValue<string,2>,
      {value:{value:string}}
    >
  >,
  Expect<
    Equal<
      NestValue<number,1>,
      {value:number}
    >
  >,
  Expect<
    Equal<
      NestValue<boolean,0>,
      boolean
    >
  >,
];

export type TestCases = Cases;

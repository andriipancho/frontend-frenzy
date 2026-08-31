import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedLeaves } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedLeaves<{user:{name:string;age:number};active:boolean}>,
      string|number|boolean
    >
  >,
];
export type TestCases = Cases;

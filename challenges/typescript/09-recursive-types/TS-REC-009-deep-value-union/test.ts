import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepValues } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepValues<{user:{name:string;age:number};active:boolean}>,
      string|number|boolean
    >
  >,
  Expect<
    Equal<
      DeepValues<{literal:1}>,
      1
    >
  >,
];

export type TestCases = Cases;

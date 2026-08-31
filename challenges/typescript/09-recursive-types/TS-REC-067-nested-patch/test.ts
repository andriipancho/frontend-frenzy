import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepPatch } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepPatch<{user:{name:string;age:number};tags:string[]}>,
      {user?:{name?:string;age?:number};tags?:string[]}
    >
  >,
  Expect<
    Equal<
      DeepPatch<number>,
      number
    >
  >,
];

export type TestCases = Cases;

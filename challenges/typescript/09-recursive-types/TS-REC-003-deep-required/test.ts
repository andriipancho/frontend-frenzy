import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepRequired } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepRequired<{user?:{name?:string};active?:boolean}>,
      {user:{name:string};active:boolean}
    >
  >,
  Expect<
    Equal<
      DeepRequired<number>,
      number
    >
  >,
];

export type TestCases = Cases;

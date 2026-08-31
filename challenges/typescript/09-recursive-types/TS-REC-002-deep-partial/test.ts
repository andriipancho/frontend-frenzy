import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepPartial } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepPartial<{user:{name:string;age:number};active:boolean}>,
      {user?:{name?:string;age?:number};active?:boolean}
    >
  >,
  Expect<
    Equal<
      DeepPartial<string>,
      string
    >
  >,
];

export type TestCases = Cases;

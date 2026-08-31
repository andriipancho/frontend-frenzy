import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FormErrors } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FormErrors<{user:{name:string;age:number};tags:[string,string]}>,
      {user?:{name?:readonly string[];age?:readonly string[]};tags?:[(readonly string[])?,(readonly string[])?]}
    >
  >,
  Expect<
    Equal<
      FormErrors<string>,
      readonly string[]
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepValidationFlags } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepValidationFlags<{user:{name:string};flags:[true,0]}>,
      {user:{name:boolean};flags:[boolean,boolean]}
    >
  >,
  Expect<
    Equal<
      DeepValidationFlags<string>,
      boolean
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepValidators } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepValidators<{name:string;flags:[true,number]}>,
      {name:(input:unknown)=>input is string;flags:[(input:unknown)=>input is true,(input:unknown)=>input is number]}
    >
  >,
  Expect<
    Equal<
      DeepValidators<boolean>,
      (input:unknown)=>input is boolean
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepStrings } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepStrings<{id:number;flags:[true,null];nested:{value:symbol}}>,
      {id:string;flags:[string,string];nested:{value:string}}
    >
  >,
  Expect<
    Equal<
      DeepStrings<boolean>,
      string
    >
  >,
];

export type TestCases = Cases;

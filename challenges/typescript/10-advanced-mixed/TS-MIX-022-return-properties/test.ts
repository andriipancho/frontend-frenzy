import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResultProperties } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResultProperties<{get:()=>string;count:number}>,
      {get:string;count:number}
    >
  >,
];
export type TestCases = Cases;

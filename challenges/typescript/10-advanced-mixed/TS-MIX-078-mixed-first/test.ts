import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedFirstParameter } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedFirstParameter<(id:string,count:number)=>void>,
      string
    >
  >,
];
export type TestCases = Cases;

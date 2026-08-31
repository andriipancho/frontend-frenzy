import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepCurrent } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepCurrent<{id:string;flags:[true,0]}>,
      {id:{current:string};flags:[{current:true},{current:0}]}
    >
  >,
  Expect<
    Equal<
      DeepCurrent<number>,
      {current:number}
    >
  >,
];

export type TestCases = Cases;

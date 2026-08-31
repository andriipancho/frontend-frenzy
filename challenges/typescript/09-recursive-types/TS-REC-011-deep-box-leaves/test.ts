import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepBox } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepBox<{id:string;flags:[true,0]}>,
      {id:{value:string};flags:[{value:true},{value:0}]}
    >
  >,
  Expect<
    Equal<
      DeepBox<number>,
      {value:number}
    >
  >,
];

export type TestCases = Cases;

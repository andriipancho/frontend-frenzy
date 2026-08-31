import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepUnbox } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepUnbox<{id:{value:string};nested:{value:{value:number}}}>,
      {id:string;nested:number}
    >
  >,
  Expect<
    Equal<
      DeepUnbox<[{value:1},{value:2}]>,
      [1,2]
    >
  >,
];

export type TestCases = Cases;

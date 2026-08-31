import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepReplace } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepReplace<{id:string;meta:{label:string;count:number}},string,boolean>,
      {id:boolean;meta:{label:boolean;count:number}}
    >
  >,
  Expect<
    Equal<
      DeepReplace<[1,2,string],number,null>,
      [null,null,string]
    >
  >,
];

export type TestCases = Cases;

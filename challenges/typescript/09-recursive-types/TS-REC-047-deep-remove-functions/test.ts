import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepDataOnly } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepDataOnly<{id:string;save:()=>void;nested:{value:number;reset:()=>void}}>,
      {id:string;nested:{value:number}}
    >
  >,
  Expect<
    Equal<
      DeepDataOnly<{run:()=>void}>,
      {}
    >
  >,
];

export type TestCases = Cases;

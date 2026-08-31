import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMixedData } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMixedData<{id:string;save:()=>void;nested:{value:number;reset:()=>void}}>,
      {id:string;nested:{value:number}}
    >
  >,
];
export type TestCases = Cases;

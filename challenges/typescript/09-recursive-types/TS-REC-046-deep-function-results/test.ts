import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepFunctionResults } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepFunctionResults<{load:()=>Promise<string>;nested:{count:()=>number}}>,
      {load:Promise<string>;nested:{count:number}}
    >
  >,
  Expect<
    Equal<
      DeepFunctionResults<() => {id:string}>,
      {id:string}
    >
  >,
];

export type TestCases = Cases;

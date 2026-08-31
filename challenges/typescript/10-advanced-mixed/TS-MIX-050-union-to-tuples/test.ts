import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnionTuples } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnionTuples<{type:"a";payload:string}|{type:"b";payload:number}>,
      ["a",string]|["b",number]
    >
  >,
];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { GetterMap } from "./task.js";

type Cases = [
  Expect<
    Equal<
      GetterMap<{name:string;age:number}>,
      {getName:()=>string;getAge:()=>number}
    >
  >,
];
export type TestCases = Cases;

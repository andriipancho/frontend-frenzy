import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedSchema } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedSchema<{id:string;count:number}>,
      {id:{parse:(input:unknown)=>string};count:{parse:(input:unknown)=>number}}
    >
  >,
];
export type TestCases = Cases;

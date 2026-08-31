import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyValidators } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PropertyValidators<{id:string;count:number}>,
      {id:(input:unknown)=>input is string;count:(input:unknown)=>input is number}
    >
  >,
];
export type TestCases = Cases;

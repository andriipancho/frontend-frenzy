import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ValueHandlers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ValueHandlers<{id:string;count:number}>,
      {id:(value:string)=>void;count:(value:number)=>void}
    >
  >,
];
export type TestCases = Cases;

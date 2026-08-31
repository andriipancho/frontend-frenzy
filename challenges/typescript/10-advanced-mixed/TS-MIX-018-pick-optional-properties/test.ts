import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickOptional } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickOptional<{id:string;name?:string;value:number|undefined}>,
      Pick<{id:string;name?:string;value:number|undefined},"name"|"value">
    >
  >,
];
export type TestCases = Cases;

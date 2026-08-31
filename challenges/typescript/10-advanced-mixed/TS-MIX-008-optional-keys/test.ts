import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { OptionalKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      OptionalKeys<{id:string;name?:string;value:number|undefined}>,
      "name"|"value"
    >
  >,
];
export type TestCases = Cases;

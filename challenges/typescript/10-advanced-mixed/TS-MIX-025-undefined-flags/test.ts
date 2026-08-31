import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UndefinedFlags } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UndefinedFlags<{id:string;name?:string}>,
      {id:false;name:true}
    >
  >,
];
export type TestCases = Cases;

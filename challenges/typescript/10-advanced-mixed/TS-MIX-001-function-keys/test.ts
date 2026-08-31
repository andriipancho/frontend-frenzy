import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FunctionKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FunctionKeys<{save:()=>void;id:string}>,
      "save"
    >
  >,
];
export type TestCases = Cases;

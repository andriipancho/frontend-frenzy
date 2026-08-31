import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedCommands } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedCommands<{type:"save";payload:{id:string}}|{type:"close";payload:void}>,
      {save:(payload:{id:string})=>void;close:(payload:void)=>void}
    >
  >,
];
export type TestCases = Cases;

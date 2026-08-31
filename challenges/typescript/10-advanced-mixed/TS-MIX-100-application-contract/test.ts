import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApplicationContract } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ApplicationContract<{load:{input:{id:string};output:{name:string};async:true};reset:{input:void;output:true;async:false}}>,
      {runLoad:(input:{id:string})=>Promise<{name:string}>;runReset:(input:void)=>true}
    >
  >,
];
export type TestCases = Cases;

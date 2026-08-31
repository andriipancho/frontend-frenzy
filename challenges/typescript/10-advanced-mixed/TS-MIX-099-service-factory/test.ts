import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedFactories } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedFactories<{logger:{log:(text:string)=>void};cache:{get:(key:string)=>string}}>,
      {createLogger:()=>{log:(text:string)=>void};createCache:()=>{get:(key:string)=>string}}
    >
  >,
];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedAsyncReturn } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedAsyncReturn<(id:string)=>Promise<number>>,
      number
    >
  >,
];
export type TestCases = Cases;

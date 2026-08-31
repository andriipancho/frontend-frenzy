import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedReturn } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedReturn<(id:string)=>Promise<number>>,
      Promise<number>
    >
  >,
];
export type TestCases = Cases;

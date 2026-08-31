import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AsyncKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AsyncKeys<{load:()=>Promise<string>;save:()=>void}>,
      "load"
    >
  >,
];
export type TestCases = Cases;

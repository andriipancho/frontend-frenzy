import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedValidation } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedValidation<number,false>,
      {valid:false;issues:readonly string[]}
    >
  >,
];
export type TestCases = Cases;

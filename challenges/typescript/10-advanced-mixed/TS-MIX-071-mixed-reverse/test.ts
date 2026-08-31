import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedReverse } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedReverse<[1,"a",true]>,
      [true,"a",1]
    >
  >,
];
export type TestCases = Cases;

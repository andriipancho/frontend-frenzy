import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedTupleFlatten } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedTupleFlatten<[1,[2,[3]]]>,
      [1,2,3]
    >
  >,
];
export type TestCases = Cases;

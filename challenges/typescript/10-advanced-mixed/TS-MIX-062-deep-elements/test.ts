import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepFlatten } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepFlatten<string[][][]>,
      string
    >
  >,
];
export type TestCases = Cases;

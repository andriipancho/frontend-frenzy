import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepResolve } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepResolve<Promise<Promise<string>>>,
      string
    >
  >,
];
export type TestCases = Cases;

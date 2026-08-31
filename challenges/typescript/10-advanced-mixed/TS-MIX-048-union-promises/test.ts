import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnionPromises } from "./task.js";

type Cases = [
  Expect<
    Equal<
      UnionPromises<Promise<string>|number|Promise<true>>,
      string|true
    >
  >,
];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedZip } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedZip<[1,2],["a","b"]>,
      [[1,"a"],[2,"b"]]
    >
  >,
];
export type TestCases = Cases;

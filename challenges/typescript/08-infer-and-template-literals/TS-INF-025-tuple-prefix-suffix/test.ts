import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PrefixSuffix } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PrefixSuffix<["start", 1, 2, "end"]>,
      { prefix: "start"; middle: [1, 2]; suffix: "end" }
    >
  >,
  Expect<
    Equal<
      PrefixSuffix<readonly [true, false]>,
      { prefix: true; middle: []; suffix: false }
    >
  >,
];

export type TestCases = Cases;

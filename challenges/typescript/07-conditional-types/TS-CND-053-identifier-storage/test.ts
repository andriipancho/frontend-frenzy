import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IdStorage } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IdStorage<string | number>,
      "text" | "numeric"
    >
  >,
  Expect<
    Equal<
      IdStorage<bigint>,
      "big-int"
    >
  >,
  Expect<
    Equal<
      IdStorage<symbol>,
      "unsupported"
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { JsonCategory } from "./task.js";

type Cases = [
  Expect<
    Equal<
      JsonCategory<null | string>,
      "null" | "scalar"
    >
  >,
  Expect<
    Equal<
      JsonCategory<readonly [1, 2]>,
      "array"
    >
  >,
  Expect<
    Equal<
      JsonCategory<{ id: string }>,
      "object"
    >
  >,
];

export type TestCases = Cases;

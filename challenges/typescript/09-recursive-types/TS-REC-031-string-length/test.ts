import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StringLength } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StringLength<"hello">,
      5
    >
  >,
  Expect<
    Equal<
      StringLength<"🔥x">,
      3
    >
  >,
  Expect<
    Equal<
      StringLength<"">,
      0
    >
  >,
];

export type TestCases = Cases;

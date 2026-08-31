import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SplitText } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SplitText<"a,b,c",",">,
      ["a","b","c"]
    >
  >,
  Expect<
    Equal<
      SplitText<"one",",">,
      ["one"]
    >
  >,
  Expect<
    Equal<
      SplitText<"a::b::c","::">,
      ["a","b","c"]
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { JoinText } from "./task.js";

type Cases = [
  Expect<
    Equal<
      JoinText<["a","b","c"],"-">,
      "a-b-c"
    >
  >,
  Expect<
    Equal<
      JoinText<["one"],",">,
      "one"
    >
  >,
  Expect<
    Equal<
      JoinText<[],"/">,
      ""
    >
  >,
];

export type TestCases = Cases;

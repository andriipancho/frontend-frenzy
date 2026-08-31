import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RemoveSpaces } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RemoveSpaces<"a b c">,
      "abc"
    >
  >,
  Expect<
    Equal<
      RemoveSpaces<"  value  ">,
      "value"
    >
  >,
  Expect<
    Equal<
      RemoveSpaces<"">,
      ""
    >
  >,
];

export type TestCases = Cases;

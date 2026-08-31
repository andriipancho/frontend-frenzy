import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { WidenLiteral } from "./task.js";

type Cases = [
  Expect<
    Equal<
      WidenLiteral<"ready">,
      string
    >
  >,
  Expect<
    Equal<
      WidenLiteral<1 | false>,
      number | boolean
    >
  >,
  Expect<
    Equal<
      WidenLiteral<{ id: 1 }>,
      { id: 1 }
    >
  >,
];

export type TestCases = Cases;

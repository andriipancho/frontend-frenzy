import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PrimitiveKind } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PrimitiveKind<"x">,
      "string"
    >
  >,
  Expect<
    Equal<
      PrimitiveKind<1 | false>,
      "number" | "boolean"
    >
  >,
  Expect<
    Equal<
      PrimitiveKind<symbol>,
      "other"
    >
  >,
];

export type TestCases = Cases;

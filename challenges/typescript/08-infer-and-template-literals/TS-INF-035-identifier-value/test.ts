import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IdentifierOf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IdentifierOf<{ id: string; name: string }>,
      string
    >
  >,
  Expect<
    Equal<
      IdentifierOf<{ id: 42 } | { id: "root" }>,
      42 | "root"
    >
  >,
  Expect<
    Equal<
      IdentifierOf<{ name: string }>,
      never
    >
  >,
];

export type TestCases = Cases;

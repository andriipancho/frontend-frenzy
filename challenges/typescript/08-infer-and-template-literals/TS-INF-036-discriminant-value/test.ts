import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DiscriminantOf } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DiscriminantOf<{ kind: "circle"; radius: number } | { kind: "square"; size: number }>,
      "circle" | "square"
    >
  >,
  Expect<
    Equal<
      DiscriminantOf<{ kind: 1 }>,
      1
    >
  >,
  Expect<
    Equal<
      DiscriminantOf<{ type: string }>,
      never
    >
  >,
];

export type TestCases = Cases;

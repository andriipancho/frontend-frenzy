import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CrossProduct } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CrossProduct<"x" | "y", 1 | 2>,
      ["x", 1] | ["x", 2] | ["y", 1] | ["y", 2]
    >
  >,
  Expect<
    Equal<
      CrossProduct<never, 1>,
      never
    >
  >,
];

export type TestCases = Cases;

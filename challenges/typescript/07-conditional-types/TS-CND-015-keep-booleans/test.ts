import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeepBooleans } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KeepBooleans<true | 0 | false | "x">,
      boolean
    >
  >,
  Expect<
    Equal<
      KeepBooleans<string | number>,
      never
    >
  >,
];

export type TestCases = Cases;

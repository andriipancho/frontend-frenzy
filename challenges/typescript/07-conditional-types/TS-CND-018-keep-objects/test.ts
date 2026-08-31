import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeepObjects } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KeepObjects<string | { id: string } | (() => void)>,
      { id: string } | (() => void)
    >
  >,
  Expect<
    Equal<
      KeepObjects<null | number>,
      never
    >
  >,
];

export type TestCases = Cases;

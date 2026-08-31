import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeysNotMatching } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KeysNotMatching<{ id: string; count: number; name: string }, string>,
      "count"
    >
  >,
  Expect<
    Equal<
      KeysNotMatching<{ active: boolean; count: number }, Date>,
      "active" | "count"
    >
  >,
];

export type TestCases = Cases;

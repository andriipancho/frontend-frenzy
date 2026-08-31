import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KeysMatching } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KeysMatching<{ id: string; count: number; name: string }, string>,
      "id" | "name"
    >
  >,
  Expect<
    Equal<
      KeysMatching<{ active: boolean; count: number }, Date>,
      never
    >
  >,
];

export type TestCases = Cases;

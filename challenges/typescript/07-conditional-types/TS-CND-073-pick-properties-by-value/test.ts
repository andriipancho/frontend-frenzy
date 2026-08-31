import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickByValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickByValue<{ id: string; count: number; name: string }, string>,
      { id: string; name: string }
    >
  >,
  Expect<
    Equal<
      PickByValue<{ active: boolean; count: number }, Date>,
      {}
    >
  >,
];

export type TestCases = Cases;

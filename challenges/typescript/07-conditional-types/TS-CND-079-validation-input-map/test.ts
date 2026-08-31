import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ValidationInputs } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ValidationInputs<{ name: string; age: number; active: boolean; metadata: object }>,
      { name: string; age: string | number; active: boolean | "true" | "false"; metadata: unknown }
    >
  >,
];

export type TestCases = Cases;

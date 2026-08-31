import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FormState } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FormState<{ profile: { name: string; age: number }; roles: readonly string[] }>,
      { profile: { name: { value: string; error?: string }; age: { value: number; error?: string } }; roles: { value: readonly string[]; error?: string } }
    >
  >,
];

export type TestCases = Cases;

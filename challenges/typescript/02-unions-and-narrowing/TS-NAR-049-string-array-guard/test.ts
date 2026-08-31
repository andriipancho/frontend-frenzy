import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { isStringArray } from "./task.js";

declare const input: unknown;

if (isStringArray(input)) {
  input.map((item) => item.toUpperCase());
}

type Cases = [
  Expect<Equal<typeof isStringArray, (value: unknown) => value is string[]>>,
];

export type TestCases = Cases;

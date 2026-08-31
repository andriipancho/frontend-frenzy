import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { isNonEmptyString } from "./task.js";

declare const input: unknown;

if (isNonEmptyString(input)) {
  input.toUpperCase();
}

type Cases = [
  Expect<Equal<typeof isNonEmptyString, (value: unknown) => value is string>>,
];

export type TestCases = Cases;

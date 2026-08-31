import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { type Validator } from "./task.js";

declare const validator: Validator<string>;
declare const input: unknown;

if (validator.isValid(input)) {
  input.toUpperCase();
}

type Cases = [
  Expect<Equal<Validator<string>["isValid"], (value: unknown) => value is string>>,
  Expect<Equal<Validator<number>["isValid"], (value: unknown) => value is number>>,
];

export type TestCases = Cases;

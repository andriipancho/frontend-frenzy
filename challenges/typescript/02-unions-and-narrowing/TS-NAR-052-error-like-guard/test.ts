import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { isErrorLike, type ErrorLike } from "./task.js";

declare const input: unknown;

if (isErrorLike(input)) {
  input.message.toUpperCase();
}

type Cases = [
  Expect<Equal<ErrorLike, { message: string }>>,
  Expect<Equal<typeof isErrorLike, (value: unknown) => value is ErrorLike>>,
];

export type TestCases = Cases;

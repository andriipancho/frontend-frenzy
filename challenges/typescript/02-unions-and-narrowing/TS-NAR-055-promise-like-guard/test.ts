import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { isPromiseLike, type PromiseLikeValue } from "./task.js";

declare const input: unknown;

if (isPromiseLike(input)) {
  input.then((value) => console.log(value));
}

type Cases = [
  Expect<Equal<PromiseLikeValue, { then: (resolve: (value: unknown) => void) => unknown }>>,
  Expect<Equal<typeof isPromiseLike, (value: unknown) => value is PromiseLikeValue>>,
];

export type TestCases = Cases;

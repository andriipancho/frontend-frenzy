import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { isSuccess, type Failure, type Result, type Success } from "./task.js";

declare const result: Result;

if (isSuccess(result)) {
  result.data.toUpperCase();
} else {
  result.error.toUpperCase();
}

type Cases = [
  Expect<Equal<Success, { ok: true; data: string }>>,
  Expect<Equal<Failure, { ok: false; error: string }>>,
  Expect<Equal<typeof isSuccess, (result: Result) => result is Success>>,
];

export type TestCases = Cases;

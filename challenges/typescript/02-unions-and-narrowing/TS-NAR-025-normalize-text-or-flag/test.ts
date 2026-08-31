import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { normalizeValue } from "./task.js";

normalizeValue(" ready ");
normalizeValue(true);

// @ts-expect-error the declared parameter type must not widen
normalizeValue(42);

type Cases = [
  Expect<Equal<Parameters<typeof normalizeValue>, [string | boolean]>>,
  Expect<Equal<ReturnType<typeof normalizeValue>, string>>,
];

export type TestCases = Cases;

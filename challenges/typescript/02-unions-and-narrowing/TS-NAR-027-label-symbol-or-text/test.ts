import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { labelValue } from "./task.js";

labelValue("ready");
labelValue(Symbol("ready"));

// @ts-expect-error the declared parameter type must not widen
labelValue(42);

type Cases = [
  Expect<Equal<Parameters<typeof labelValue>, [symbol | string]>>,
  Expect<Equal<ReturnType<typeof labelValue>, string>>,
];

export type TestCases = Cases;

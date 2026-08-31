import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { formatValue } from "./task.js";

formatValue("ready");
formatValue(42);

// @ts-expect-error the declared parameter type must not widen
formatValue(true);

type Cases = [
  Expect<Equal<Parameters<typeof formatValue>, [string | number]>>,
  Expect<Equal<ReturnType<typeof formatValue>, string>>,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { renderValue } from "./task.js";

renderValue(12);
renderValue(new Date());

// @ts-expect-error the declared parameter type must not widen
renderValue("12");

type Cases = [
  Expect<Equal<Parameters<typeof renderValue>, [number | Date]>>,
  Expect<Equal<ReturnType<typeof renderValue>, string>>,
];

export type TestCases = Cases;

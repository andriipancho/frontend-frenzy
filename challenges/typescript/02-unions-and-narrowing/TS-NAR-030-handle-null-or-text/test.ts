import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { cleanText } from "./task.js";

cleanText(" ready ");
cleanText(null);

// @ts-expect-error the declared parameter type must not widen
cleanText(undefined);

type Cases = [
  Expect<Equal<Parameters<typeof cleanText>, [string | null]>>,
  Expect<Equal<ReturnType<typeof cleanText>, string>>,
];

export type TestCases = Cases;

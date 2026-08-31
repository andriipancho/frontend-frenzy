import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { normalizeUnknown } from "./task.js";

normalizeUnknown(" ready ");
normalizeUnknown("");
normalizeUnknown(42);
normalizeUnknown(null);

type Cases = [
  Expect<Equal<Parameters<typeof normalizeUnknown>, [unknown]>>,
  Expect<Equal<ReturnType<typeof normalizeUnknown>, string | undefined>>,
];

export type TestCases = Cases;

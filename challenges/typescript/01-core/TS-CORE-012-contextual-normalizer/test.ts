import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { normalize } from "./task.js";

type Cases = [Expect<Equal<typeof normalize, (value: string) => string>>];

normalize("  READY ");
// @ts-expect-error only strings can be normalized
normalize(42);

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { maxRetries } from "./task.js";

type Cases = [Expect<Equal<typeof maxRetries, 3>>];

export type TestCases = Cases;

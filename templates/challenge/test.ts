import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import type { ChallengeResult } from "./task.js";

type Cases = [Expect<Equal<ChallengeResult, never>>];

export type TestCases = Cases;

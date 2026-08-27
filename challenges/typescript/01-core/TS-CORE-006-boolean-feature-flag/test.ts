import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { isFeatureEnabled } from "./task.js";

type Cases = [Expect<Equal<ReturnType<typeof isFeatureEnabled>, boolean>>];

const enabled: boolean = isFeatureEnabled(true);
void enabled;

export type TestCases = Cases;

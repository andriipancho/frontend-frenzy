import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { calculateTotal } from "./task.js";

type Cases = [Expect<Equal<typeof calculateTotal, (prices: number[]) => number>>];

calculateTotal([12, 8, 5]);
// @ts-expect-error prices must be numeric
calculateTotal([12, "8"]);

export type TestCases = Cases;

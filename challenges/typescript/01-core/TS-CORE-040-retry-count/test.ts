import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RetryCount } from "./task.js";

type Expected = 0 | 1 | 2 | 3;
type Cases = [Expect<Equal<RetryCount, Expected>>];
const retries: RetryCount = 3;
// @ts-expect-error the retry policy stops at three
const tooMany: RetryCount = 4;
void retries;
void tooMany;
export type TestCases = Cases;

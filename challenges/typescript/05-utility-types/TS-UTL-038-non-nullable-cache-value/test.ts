import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PresentCacheValue } from "./task.js";

type Cases = [Expect<Equal<PresentCacheValue, string>>];
export type TestCases = Cases;

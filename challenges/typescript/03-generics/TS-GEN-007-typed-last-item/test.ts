import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { lastItem } from "./task.js";

const value = lastItem([1, 2, 3] as const);
type Cases = [Expect<Equal<typeof value, 1 | 2 | 3 | undefined>>];
export type TestCases = Cases;

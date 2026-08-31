import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SafeUserRecord } from "./task.js";

type Expected = { id: string; email: string; createdAt: Date };
type Cases = [Expect<Equal<SafeUserRecord, Expected>>];
export type TestCases = Cases;

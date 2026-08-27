import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { isDefined } from "./task.js";

const values = ["a", null, "b", undefined].filter(isDefined);
type Cases = [Expect<Equal<typeof values, string[]>>];
export type TestCases = Cases;

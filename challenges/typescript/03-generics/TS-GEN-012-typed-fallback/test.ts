import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { withFallback } from "./task.js";

const value = withFallback<string>(undefined, "ready");
type Cases = [Expect<Equal<typeof value, string>>];
export type TestCases = Cases;

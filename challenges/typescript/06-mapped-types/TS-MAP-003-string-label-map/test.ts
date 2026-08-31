import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Labels } from "./task.js";

type Cases = [Expect<Equal<Labels<{ id: number; active: boolean }>, { id: string; active: string }>>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AllOptional } from "./task.js";

type Cases = [Expect<Equal<AllOptional<{ id: string; active: boolean }>, { id?: string; active?: boolean }>>];
export type TestCases = Cases;

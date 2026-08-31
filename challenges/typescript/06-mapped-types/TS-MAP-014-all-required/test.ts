import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AllRequired } from "./task.js";

type Cases = [Expect<Equal<AllRequired<{ id?: string; active?: boolean }>, { id: string; active: boolean }>>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NullableSlot } from "./task.js";

type Cases = [Expect<Equal<NullableSlot<Date>, { value: Date | null }>>];
export type TestCases = Cases;

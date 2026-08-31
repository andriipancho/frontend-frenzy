import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TextValue } from "./task.js";

type Cases = [Expect<Equal<TextValue, string>>];
export type TestCases = Cases;

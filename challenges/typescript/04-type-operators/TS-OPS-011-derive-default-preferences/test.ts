import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Preferences } from "./task.js";

type Expected = { theme: string; pageSize: number; compact: boolean };
type Cases = [Expect<Equal<Preferences, Expected>>];
export type TestCases = Cases;

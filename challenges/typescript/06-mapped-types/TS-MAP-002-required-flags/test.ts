import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Flags } from "./task.js";

type Source = { search: string; retries: number; cached: Date };
type Expected = { search: boolean; retries: boolean; cached: boolean };
type Cases = [Expect<Equal<Flags<Source>, Expected>>];
export type TestCases = Cases;

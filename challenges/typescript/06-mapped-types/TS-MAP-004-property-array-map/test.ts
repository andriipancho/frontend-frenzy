import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyArrays } from "./task.js";

type Source = { names: string; attempts: number };
type Expected = { names: string[]; attempts: number[] };
type Cases = [Expect<Equal<PropertyArrays<Source>, Expected>>];
export type TestCases = Cases;

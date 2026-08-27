import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Triple } from "./task.js";

type Cases = [Expect<Equal<Triple<string, number, boolean>, [string, number, boolean]>>];
export type TestCases = Cases;

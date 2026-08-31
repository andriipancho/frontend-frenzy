import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NullableProperties } from "./task.js";

type Expected = { name: string | null; age: number | null };
type Cases = [Expect<Equal<NullableProperties<{ name: string; age: number }>, Expected>>];
export type TestCases = Cases;

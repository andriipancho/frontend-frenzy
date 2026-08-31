import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyState } from "./task.js";

type Expected = { title: readonly [value: string, dirty: boolean]; count: readonly [value: number, dirty: boolean] };
type Cases = [Expect<Equal<PropertyState<{ title: string; count: number }>, Expected>>];
export type TestCases = Cases;

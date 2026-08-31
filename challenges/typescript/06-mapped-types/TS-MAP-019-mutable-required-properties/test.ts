import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MutableRequired } from "./task.js";

type Source = { readonly id?: string; readonly count?: number };
type Expected = { id: string; count: number };
type Cases = [Expect<Equal<MutableRequired<Source>, Expected>>];
export type TestCases = Cases;

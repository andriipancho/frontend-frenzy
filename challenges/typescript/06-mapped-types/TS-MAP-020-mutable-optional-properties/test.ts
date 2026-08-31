import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MutableOptional } from "./task.js";

type Source = { readonly id: string; readonly count: number };
type Expected = { id?: string; count?: number };
type Cases = [Expect<Equal<MutableOptional<Source>, Expected>>];
export type TestCases = Cases;

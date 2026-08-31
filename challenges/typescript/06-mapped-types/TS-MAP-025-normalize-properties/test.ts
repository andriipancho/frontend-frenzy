import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Normalized } from "./task.js";

type Source = { readonly id?: string; name?: string; readonly active: boolean };
type Expected = { id: string; name: string; active: boolean };
type Cases = [Expect<Equal<Normalized<Source>, Expected>>];
export type TestCases = Cases;

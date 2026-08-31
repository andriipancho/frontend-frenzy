import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { OptionalReadonly } from "./task.js";

type Expected = { readonly id?: string; readonly count?: number };
type Cases = [Expect<Equal<OptionalReadonly<{ id: string; count: number }>, Expected>>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RequiredReadonly } from "./task.js";

type Expected = { readonly id: string; readonly active: boolean };
type Cases = [Expect<Equal<RequiredReadonly<{ id?: string; active?: boolean }>, Expected>>];
export type TestCases = Cases;

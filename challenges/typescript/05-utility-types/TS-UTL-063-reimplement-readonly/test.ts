import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MyReadonly } from "./task.js";

type Source = { id: string; name?: string };
type Expected = { readonly id: string; readonly name?: string };
type Cases = [Expect<Equal<MyReadonly<Source>, Expected>>];
export type TestCases = Cases;

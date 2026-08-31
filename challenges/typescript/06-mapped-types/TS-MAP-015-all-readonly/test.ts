import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AllReadonly } from "./task.js";

type Cases = [Expect<Equal<AllReadonly<{ id: string; name?: string }>, { readonly id: string; readonly name?: string }>>];
export type TestCases = Cases;

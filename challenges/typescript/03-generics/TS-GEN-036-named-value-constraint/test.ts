import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NamedValue } from "./task.js";

type Model = { name: string; id: number };
type Cases = [Expect<Equal<NamedValue<Model>, Model>>];
// @ts-expect-error a named value requires name
type Invalid = NamedValue<{ id: number }>;
export type TestCases = Cases;
export type InvalidCase = Invalid;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CallableOnly } from "./task.js";

type Handler = (value: string) => number;
type Cases = [Expect<Equal<CallableOnly<Handler>, Handler>>];
// @ts-expect-error non-callable types are rejected
type Invalid = CallableOnly<{ run: boolean }>;
export type TestCases = Cases;
export type InvalidCase = Invalid;

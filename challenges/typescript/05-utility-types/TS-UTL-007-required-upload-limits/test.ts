import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResolvedUploadLimits } from "./task.js";

type Cases = [
  Expect<Equal<ResolvedUploadLimits, { maxBytes: number; maxFiles: number }>>,
];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FeaturePatch } from "./task.js";

type Expected = {
  readonly enabled?: boolean;
  readonly rolloutPercent?: number;
  readonly owner?: string;
};
type Cases = [Expect<Equal<FeaturePatch, Expected>>];
export type TestCases = Cases;

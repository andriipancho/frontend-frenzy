import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FeatureConfig, FeatureConfigMap } from "./task.js";

type Expected = {
  search: FeatureConfig;
  billing: FeatureConfig;
  reports: FeatureConfig;
};
type Cases = [Expect<Equal<FeatureConfigMap, Expected>>];
export type TestCases = Cases;

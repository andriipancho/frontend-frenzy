import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { getFeatureConfig } from "./task.js";

const search = getFeatureConfig("search");
const billing = getFeatureConfig("billing");
type Cases = [
  Expect<Equal<typeof search, { readonly enabled: true; readonly provider: "local" }>>,
  Expect<Equal<typeof billing, { readonly enabled: false; readonly provider: "stripe" }>>,
];
// @ts-expect-error unknown feature
getFeatureConfig("reports");
export type TestCases = Cases;

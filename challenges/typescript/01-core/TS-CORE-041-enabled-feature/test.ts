import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EnabledFeature } from "./task.js";

type Expected = { name: string; enabled: true };
type Cases = [Expect<Equal<EnabledFeature, Expected>>];
const feature: EnabledFeature = { name: "search", enabled: true };
// @ts-expect-error this model represents enabled features only
const disabled: EnabledFeature = { name: "search", enabled: false };
void feature;
void disabled;
export type TestCases = Cases;

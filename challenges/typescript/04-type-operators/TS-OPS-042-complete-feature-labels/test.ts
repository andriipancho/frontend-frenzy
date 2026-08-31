import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Feature } from "./task.js";
import { featureLabels } from "./task.js";

type Cases = [Expect<Equal<keyof typeof featureLabels, Feature>>];
// @ts-expect-error arbitrary labels are not declared
featureLabels.unknown;
export type TestCases = Cases;

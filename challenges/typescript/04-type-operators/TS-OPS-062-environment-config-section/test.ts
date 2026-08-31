import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { environmentConfig } from "./task.js";
import type { ConfigByEnvironment } from "./task.js";

declare const configs: ConfigByEnvironment;
const production = environmentConfig(configs, "production");
type Cases = [
  Expect<Equal<typeof production, ConfigByEnvironment["production"]>>,
];
// @ts-expect-error test is not a configured environment
environmentConfig(configs, "test");
export type TestCases = Cases;

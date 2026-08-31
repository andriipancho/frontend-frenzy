import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PluginName } from "./task.js";
import { plugins } from "./task.js";

type Cases = [Expect<Equal<PluginName, "logger" | "metrics">>];
// @ts-expect-error list must be readonly
plugins.pop();
export type TestCases = Cases;

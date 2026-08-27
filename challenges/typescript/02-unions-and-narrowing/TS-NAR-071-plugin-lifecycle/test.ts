import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Plugin, PluginBase } from "./task.js";

type Expected = PluginBase & (
  | { enabled: true; config: { endpoint: string }; reason?: never }
  | { enabled: false; reason: string; config?: never }
);
type Cases = [Expect<Equal<Plugin, Expected>>];
// @ts-expect-error enabled plugins require config
const invalid: Plugin = { id: "p1", name: "sync", enabled: true };
void invalid;
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PluginHost, PluginSpec } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PluginHost<PluginSpec>,
      { install<K extends keyof PluginSpec>(name: K, options: PluginSpec[K]["options"]): PluginSpec[K]["api"]; installed: { analytics?: PluginSpec["analytics"]["api"]; storage?: PluginSpec["storage"]["api"] } }
    >
  >,
];

export type TestCases = Cases;

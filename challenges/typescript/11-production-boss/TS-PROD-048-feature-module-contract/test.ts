import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FeatureModules, FeatureSpec } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FeatureModules<FeatureSpec>,
      { search: { configure(config: { limit: number }): void; initialState: { query: string }; dispatch(action: "submit" | "clear"): void }; profile: { configure(config: { editable: boolean }): void; initialState: { name: string }; dispatch(action: "save"): void } }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EnabledFeatures } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EnabledFeatures<{ search: true; billing: false; beta: boolean }>,
      "search"
    >
  >,
  Expect<
    Equal<
      EnabledFeatures<{ darkMode: true; compact: true }>,
      "darkMode" | "compact"
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { featureFlags } from "./task.js";

type Cases = [
  Expect<Equal<typeof featureFlags.newCheckout, true>>,
  Expect<Equal<typeof featureFlags.legacySearch, false>>,
  Expect<Equal<keyof typeof featureFlags, "newCheckout" | "legacySearch">>,
];
export type TestCases = Cases;

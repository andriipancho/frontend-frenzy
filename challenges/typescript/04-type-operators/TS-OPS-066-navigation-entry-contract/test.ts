import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NavigationHref, NavigationItem } from "./task.js";

type Cases = [
  Expect<Equal<NavigationHref, "/" | "/account" | "/help">>,
  Expect<Equal<NavigationItem["label"], "Home" | "Account" | "Help">>,
];
export type TestCases = Cases;

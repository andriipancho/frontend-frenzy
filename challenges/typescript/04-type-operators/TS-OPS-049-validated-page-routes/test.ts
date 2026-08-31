import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { pageRoutes } from "./task.js";

type Cases = [
  Expect<Equal<typeof pageRoutes.home, "/">>,
  Expect<Equal<keyof typeof pageRoutes, "home" | "settings" | "profile">>,
];
// @ts-expect-error routes must be readonly
pageRoutes.settings = "/preferences";
export type TestCases = Cases;

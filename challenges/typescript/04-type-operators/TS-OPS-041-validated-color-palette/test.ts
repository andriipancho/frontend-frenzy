import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { palette } from "./task.js";

type Cases = [
  Expect<Equal<keyof typeof palette, "primary" | "danger">>,
  Expect<Equal<typeof palette.primary, "#2563eb">>,
];
// @ts-expect-error palette must be readonly
palette.primary = "#000000";
export type TestCases = Cases;

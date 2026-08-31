import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DisplayPatch } from "./task.js";

type Expected = {
  theme?: "light" | "dark";
  density?: "comfortable" | "compact";
};
type Cases = [Expect<Equal<DisplayPatch, Expected>>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Season } from "./task.js";

type Expected = "spring" | "summer" | "autumn" | "winter";
type Cases = [Expect<Equal<Season, Expected>>];
export type TestCases = Cases;

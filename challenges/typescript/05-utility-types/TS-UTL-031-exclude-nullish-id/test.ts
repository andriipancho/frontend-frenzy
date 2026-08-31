import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PresentId } from "./task.js";

type Cases = [Expect<Equal<PresentId, string | number>>];
export type TestCases = Cases;

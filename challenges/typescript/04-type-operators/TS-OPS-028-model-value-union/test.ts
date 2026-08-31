import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ModelValue } from "./task.js";

type Cases = [Expect<Equal<ModelValue, string | number | boolean>>];
export type TestCases = Cases;

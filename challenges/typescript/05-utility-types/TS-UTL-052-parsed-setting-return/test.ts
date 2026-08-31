import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParsedSetting } from "./task.js";

type Cases = [Expect<Equal<ParsedSetting, string | number | boolean>>];
export type TestCases = Cases;

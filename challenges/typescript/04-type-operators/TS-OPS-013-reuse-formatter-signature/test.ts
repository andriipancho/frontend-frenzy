import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DateFormatter } from "./task.js";

type Expected = (value: Date, locale: string) => string;
type Cases = [Expect<Equal<DateFormatter, Expected>>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NumberFormatter } from "./task.js";

type Expected = { format: (value: number) => string };
type Cases = [Expect<Equal<NumberFormatter, Expected>>];
const formatter: NumberFormatter = { format: (value) => value.toFixed(2) };
formatter.format(12);
void formatter;
export type TestCases = Cases;

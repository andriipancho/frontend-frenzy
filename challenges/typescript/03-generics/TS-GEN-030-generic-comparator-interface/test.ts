import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Comparator } from "./task.js";

type Expected = { compare(left: Date, right: Date): number };
type Cases = [Expect<Equal<Comparator<Date>, Expected>>];
export type TestCases = Cases;

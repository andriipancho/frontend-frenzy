import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Tagged } from "./task.js";

type Cases = [Expect<Equal<Tagged<number, "metric">, { value: number; tag: "metric" }>>];
export type TestCases = Cases;

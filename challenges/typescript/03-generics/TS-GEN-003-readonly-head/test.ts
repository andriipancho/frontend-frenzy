import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { head } from "./task.js";

const numberResult = head([1, 2, 3]);
const stringResult = head(["a", "b"] as const);
const emptyResult = head([] as readonly string[]);

type Cases = [
  Expect<Equal<typeof numberResult, number | undefined>>,
  Expect<Equal<typeof stringResult, "a" | "b" | undefined>>,
  Expect<Equal<typeof emptyResult, string | undefined>>,
];

export type TestCases = Cases;

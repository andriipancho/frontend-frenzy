import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SortDirection, SortField } from "./task.js";

type Cases = [
  Expect<Equal<SortField, "name" | "createdAt" | "score">>,
  Expect<Equal<SortDirection, "asc" | "desc">>,
];
export type TestCases = Cases;

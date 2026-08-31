import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ColumnName } from "./task.js";

type Cases = [Expect<Equal<ColumnName, "name" | "email" | "createdAt">>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DatabaseArguments } from "./task.js";

type Expected = [url: string, poolSize: number, ssl?: boolean];
type Cases = [Expect<Equal<DatabaseArguments, Expected>>];
export type TestCases = Cases;

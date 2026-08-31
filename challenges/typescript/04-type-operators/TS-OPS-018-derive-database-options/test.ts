import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DatabaseOptions } from "./task.js";

type Expected = { host: string; port: number; ssl: boolean };
type Cases = [Expect<Equal<DatabaseOptions, Expected>>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResolvedConnectionOptions } from "./task.js";

type Expected = { host: string; port: number; secure: boolean };
type Cases = [Expect<Equal<ResolvedConnectionOptions, Expected>>];
export type TestCases = Cases;

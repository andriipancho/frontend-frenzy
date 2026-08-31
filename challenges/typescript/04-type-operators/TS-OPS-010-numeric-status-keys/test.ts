import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StatusCode } from "./task.js";

type Cases = [Expect<Equal<StatusCode, 200 | 404 | 503>>];
export type TestCases = Cases;

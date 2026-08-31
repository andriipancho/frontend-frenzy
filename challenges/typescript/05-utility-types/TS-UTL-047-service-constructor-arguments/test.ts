import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ServiceArguments } from "./task.js";

type Expected = [baseUrl: string, retries: number];
type Cases = [Expect<Equal<ServiceArguments, Expected>>];
export type TestCases = Cases;

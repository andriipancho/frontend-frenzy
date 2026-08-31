import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResponseData } from "./task.js";

type Expected = { id: string; name: string };
type Cases = [Expect<Equal<ResponseData, Expected>>];
export type TestCases = Cases;

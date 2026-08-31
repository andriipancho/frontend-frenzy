import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResponseCatalog } from "./task.js";

type Expected = {
  200: { retryable: boolean };
  404: { retryable: boolean };
  503: { retryable: boolean };
};
type Cases = [Expect<Equal<ResponseCatalog, Expected>>];
export type TestCases = Cases;

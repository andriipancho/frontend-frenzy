import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResponseData, ApiResponse } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResponseData<ApiResponse>,
      { id: string } | { id: string; created: true }
    >
  >,
];

export type TestCases = Cases;

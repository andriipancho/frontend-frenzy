import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApiResponse } from "./task.js";

type DefaultResponse = ApiResponse;
type UserResponse = ApiResponse<{ id: string }>;
type Cases = [
  Expect<Equal<DefaultResponse["data"], unknown>>,
  Expect<Equal<UserResponse["data"], { id: string }>>,
];
export type TestCases = Cases;

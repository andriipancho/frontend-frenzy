import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApiMethod, ApiPath } from "./task.js";

type Cases = [
  Expect<Equal<ApiMethod, "GET" | "POST" | "DELETE">>,
  Expect<Equal<ApiPath, "/items" | "/items/:id">>,
];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseRoute } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseRoute<"GET /users">,
      {method:"get";path:"/users"}
    >
  >,
];
export type TestCases = Cases;

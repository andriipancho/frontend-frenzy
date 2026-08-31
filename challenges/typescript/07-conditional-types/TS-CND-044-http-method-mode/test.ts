import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MethodMode } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MethodMode<"GET">,
      "read"
    >
  >,
  Expect<
    Equal<
      MethodMode<"POST" | "PATCH">,
      "write"
    >
  >,
  Expect<
    Equal<
      MethodMode<"OPTIONS">,
      "unsupported"
    >
  >,
];

export type TestCases = Cases;

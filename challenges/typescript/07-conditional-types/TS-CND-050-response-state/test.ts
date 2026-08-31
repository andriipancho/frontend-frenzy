import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResponseState } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResponseState<{ data: string }>,
      "success"
    >
  >,
  Expect<
    Equal<
      ResponseState<{ error: Error; data: string }>,
      "error"
    >
  >,
  Expect<
    Equal<
      ResponseState<{ loading: true } | {}>,
      "loading" | "idle"
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LoadStateLabel } from "./task.js";

type Cases = [
  Expect<
    Equal<
      LoadStateLabel<{ status: "success"; data: string }>,
      "data"
    >
  >,
  Expect<
    Equal<
      LoadStateLabel<{ status: "error" } | { status: "loading" }>,
      "failure" | "pending"
    >
  >,
  Expect<
    Equal<
      LoadStateLabel<{ status: "idle" }>,
      "unknown"
    >
  >,
];

export type TestCases = Cases;

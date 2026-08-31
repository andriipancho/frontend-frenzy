import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResultMatchers, Result } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResultMatchers<Result, number>,
      { success: (result: { status: "success"; value: string }) => number; failure: (result: { status: "failure"; error: Error }) => number; cancelled: (result: { status: "cancelled"; reason?: string }) => number }
    >
  >,
];

export type TestCases = Cases;

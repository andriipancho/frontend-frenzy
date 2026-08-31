import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SuccessData } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SuccessData<{ ok: true; data: string } | { ok: false; error: Error }>,
      string
    >
  >,
  Expect<
    Equal<
      SuccessData<{ ok: true; data: { id: number } }>,
      { id: number }
    >
  >,
  Expect<
    Equal<
      SuccessData<{ ok: false; error: string }>,
      never
    >
  >,
];

export type TestCases = Cases;

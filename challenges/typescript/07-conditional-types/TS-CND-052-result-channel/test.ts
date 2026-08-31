import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResultChannel } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResultChannel<{ ok: false; error: string }>,
      "error"
    >
  >,
  Expect<
    Equal<
      ResultChannel<{ ok: true; cached: true; data: string }>,
      "cache"
    >
  >,
  Expect<
    Equal<
      ResultChannel<{ ok: true; data: string }>,
      "network"
    >
  >,
];

export type TestCases = Cases;

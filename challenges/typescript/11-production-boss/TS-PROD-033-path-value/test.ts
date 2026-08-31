import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PathValue } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PathValue<{ api: { host: string; retry: { count: number } } }, "api.retry.count">,
      number
    >
  >,
];

export type TestCases = Cases;

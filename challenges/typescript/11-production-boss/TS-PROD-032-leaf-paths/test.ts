import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { LeafPaths } from "./task.js";

type Cases = [
  Expect<
    Equal<
      LeafPaths<{ api: { host: string; retry: { count: number } }; debug: boolean }>,
      "api.host" | "api.retry.count" | "debug"
    >
  >,
];

export type TestCases = Cases;

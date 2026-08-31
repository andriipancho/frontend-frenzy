import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CacheKeyParts } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CacheKeyParts<"tenant:user:42">,
      readonly [scope: "tenant", resource: "user", id: "42"]
    >
  >,
];

export type TestCases = Cases;

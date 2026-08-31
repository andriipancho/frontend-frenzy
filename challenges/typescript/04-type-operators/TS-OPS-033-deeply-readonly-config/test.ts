import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { serviceConfig } from "./task.js";

type Expected = {
  readonly endpoint: "/api";
  readonly retry: {
    readonly attempts: 3;
    readonly enabled: true;
  };
};
type Cases = [Expect<Equal<typeof serviceConfig, Expected>>];
// @ts-expect-error nested config must be readonly
serviceConfig.retry.attempts = 4;
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { describeCache } from "./task.js";

describeCache({ value: "ready", expiresAt: new Date() });
describeCache({ reason: "expired" });

// @ts-expect-error the declared parameter type must not widen
describeCache({ value: "ready" });

type Cases = [
  Expect<Equal<Parameters<typeof describeCache>, [{ value: string; expiresAt: Date } | { reason: string }]>>,
  Expect<Equal<ReturnType<typeof describeCache>, string>>,
];

export type TestCases = Cases;

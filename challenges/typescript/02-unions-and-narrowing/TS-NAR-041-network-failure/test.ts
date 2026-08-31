import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { failureStatus, NetworkFailure } from "./task.js";

failureStatus(new Error("unknown"));
failureStatus(new NetworkFailure("offline", 503));

// @ts-expect-error the declared parameter type must not widen
failureStatus("offline");

type Cases = [
  Expect<Equal<Parameters<typeof failureStatus>, [Error | NetworkFailure]>>,
  Expect<Equal<ReturnType<typeof failureStatus>, number | undefined>>,
];

export type TestCases = Cases;

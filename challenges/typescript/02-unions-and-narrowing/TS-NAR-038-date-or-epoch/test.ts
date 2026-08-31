import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { toEpoch } from "./task.js";

toEpoch(new Date());
toEpoch(1_700_000_000_000);

// @ts-expect-error the declared parameter type must not widen
toEpoch("2026-01-01");

type Cases = [
  Expect<Equal<Parameters<typeof toEpoch>, [Date | number]>>,
  Expect<Equal<ReturnType<typeof toEpoch>, number>>,
];

export type TestCases = Cases;

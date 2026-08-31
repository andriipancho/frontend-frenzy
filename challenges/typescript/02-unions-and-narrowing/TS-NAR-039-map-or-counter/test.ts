import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { entryCount } from "./task.js";

entryCount(new Map([["ready", true]]));
entryCount({ count: 3 });

// @ts-expect-error the declared parameter type must not widen
entryCount(new Set(["ready"]));

type Cases = [
  Expect<Equal<Parameters<typeof entryCount>, [Map<string, unknown> | { count: number }]>>,
  Expect<Equal<ReturnType<typeof entryCount>, number>>,
];

export type TestCases = Cases;

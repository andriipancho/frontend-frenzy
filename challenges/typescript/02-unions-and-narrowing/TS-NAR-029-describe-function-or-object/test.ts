import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { describeCallable } from "./task.js";

describeCallable(() => {});
describeCallable({ kind: "record" });

// @ts-expect-error the declared parameter type must not widen
describeCallable(42);

type Cases = [
  Expect<Equal<Parameters<typeof describeCallable>, [(() => void) | { kind: string }]>>,
  Expect<Equal<ReturnType<typeof describeCallable>, string>>,
];

export type TestCases = Cases;

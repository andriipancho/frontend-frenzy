import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { measure } from "./task.js";

measure(" ready ");
measure(["a", "b"]);

// @ts-expect-error the declared parameter type must not widen
measure(42);

type Cases = [
  Expect<Equal<Parameters<typeof measure>, [string | string[]]>>,
  Expect<Equal<ReturnType<typeof measure>, number>>,
];

export type TestCases = Cases;

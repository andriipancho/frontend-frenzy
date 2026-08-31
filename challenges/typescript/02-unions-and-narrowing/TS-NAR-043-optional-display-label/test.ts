import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { displayLabel } from "./task.js";

displayLabel("  Ada  ");
displayLabel(null);
displayLabel(undefined);

// @ts-expect-error the declared parameter type must not widen
displayLabel(42);

type Cases = [
  Expect<Equal<Parameters<typeof displayLabel>, [string | null | undefined]>>,
  Expect<Equal<ReturnType<typeof displayLabel>, string>>,
];

export type TestCases = Cases;

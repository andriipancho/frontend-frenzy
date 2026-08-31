import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { hasStringId, type Identified } from "./task.js";

declare const input: unknown;

if (hasStringId(input)) {
  input.id.toUpperCase();
}

type Cases = [
  Expect<Equal<Identified, { id: string }>>,
  Expect<Equal<typeof hasStringId, (value: unknown) => value is Identified>>,
];

export type TestCases = Cases;

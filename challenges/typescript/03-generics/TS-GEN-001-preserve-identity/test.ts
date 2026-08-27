import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { identity } from "./task.js";

const text = identity("frenzy" as const);
const count = identity(42 as const);
const object = identity({ ready: true });

type Cases = [
  Expect<Equal<typeof text, "frenzy">>,
  Expect<Equal<typeof count, 42>>,
  Expect<Equal<typeof object, { ready: boolean }>>,
];

export type TestCases = Cases;

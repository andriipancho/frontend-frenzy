import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { createSession } from "./task.js";

const session = createSession();

type Cases = [
  Expect<Equal<typeof session.id, string>>,
  Expect<Equal<typeof session.active, boolean>>,
];

export type TestCases = Cases;

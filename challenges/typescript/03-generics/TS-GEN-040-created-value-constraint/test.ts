import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { preserveCreated } from "./task.js";

const value = preserveCreated({ createdAt: new Date(), id: "r1" });

value.id.toUpperCase();

type Cases = [
  Expect<Equal<typeof value, { createdAt: Date; id: string }>>,
];

export type TestCases = Cases;

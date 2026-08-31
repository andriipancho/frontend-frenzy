import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { findEntity } from "./task.js";

const entity = findEntity([{ id: "u1", role: "admin" as const }], "u1");

entity?.role.toUpperCase();

type Cases = [
  Expect<Equal<typeof entity, { id: string; role: "admin" } | undefined>>,
];

export type TestCases = Cases;

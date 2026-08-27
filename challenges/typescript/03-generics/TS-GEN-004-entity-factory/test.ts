import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { createEntity } from "./task.js";

const entity = createEntity({ id: "u1", role: "admin" as const });

type Cases = [
  Expect<Equal<typeof entity.id, string>>,
  Expect<Equal<typeof entity.role, "admin">>,
  Expect<Equal<typeof entity.createdAt, Date>>,
];

// @ts-expect-error id is required
createEntity({ role: "admin" });
// @ts-expect-error id must be a string
createEntity({ id: 42 });

export type TestCases = Cases;

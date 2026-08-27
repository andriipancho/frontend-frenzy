import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { objectKeys } from "./task.js";

const keys = objectKeys({ name: "Ada", active: true });

type Cases = [Expect<Equal<typeof keys, ("name" | "active")[]>>];

export type TestCases = Cases;

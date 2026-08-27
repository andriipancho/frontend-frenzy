import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { userPath } from "./task.js";

type Cases = [Expect<Equal<typeof userPath, (id: string) => string>>];

userPath("user-42");
// @ts-expect-error numeric identifiers are not part of this API
userPath(42);

export type TestCases = Cases;

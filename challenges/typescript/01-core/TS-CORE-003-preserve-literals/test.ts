import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { methods } from "./task.js";

type Cases = [Expect<Equal<typeof methods, readonly ["GET", "POST"]>>];

// @ts-expect-error the tuple must not be mutable
methods.push("DELETE");

export type TestCases = Cases;

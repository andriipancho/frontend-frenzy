import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { sessionOwner } from "./task.js";

sessionOwner({ userId: "u1" });
sessionOwner(null);

// @ts-expect-error the declared parameter type must not widen
sessionOwner(undefined);

type Cases = [
  Expect<Equal<Parameters<typeof sessionOwner>, [{ userId: string } | null]>>,
  Expect<Equal<ReturnType<typeof sessionOwner>, string>>,
];

export type TestCases = Cases;

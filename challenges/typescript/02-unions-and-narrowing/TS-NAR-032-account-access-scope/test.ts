import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { accessScope } from "./task.js";

accessScope({ id: "a1", permissions: ["read", "write"] });
accessScope({ id: "a2", teamId: "frontend" });

// @ts-expect-error the declared parameter type must not widen
accessScope({ id: "a3" });

type Cases = [
  Expect<Equal<Parameters<typeof accessScope>, [{ id: string; permissions: string[] } | { id: string; teamId: string }]>>,
  Expect<Equal<ReturnType<typeof accessScope>, string>>,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { selectionId } from "./task.js";

selectionId("item-1");
selectionId({ id: "item-2", label: "Second" });
selectionId(null);

// @ts-expect-error the declared parameter type must not widen
selectionId(42);

type Cases = [
  Expect<Equal<Parameters<typeof selectionId>, [string | { id: string; label: string } | null]>>,
  Expect<Equal<ReturnType<typeof selectionId>, string | undefined>>,
];

export type TestCases = Cases;

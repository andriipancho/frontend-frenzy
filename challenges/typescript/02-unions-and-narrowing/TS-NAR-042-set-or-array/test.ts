import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { collectionSize } from "./task.js";

collectionSize(new Set(["a", "b"]));
collectionSize(["a", "b"]);

// @ts-expect-error the declared parameter type must not widen
collectionSize(new Map([["a", "b"]]));

type Cases = [
  Expect<Equal<Parameters<typeof collectionSize>, [Set<string> | string[]]>>,
  Expect<Equal<ReturnType<typeof collectionSize>, number>>,
];

export type TestCases = Cases;

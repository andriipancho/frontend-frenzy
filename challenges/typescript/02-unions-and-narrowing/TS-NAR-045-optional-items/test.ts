import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { itemCount } from "./task.js";

itemCount(["a", "b"]);
itemCount(undefined);

// @ts-expect-error the declared parameter type must not widen
itemCount(null);

type Cases = [
  Expect<Equal<Parameters<typeof itemCount>, [string[] | undefined]>>,
  Expect<Equal<ReturnType<typeof itemCount>, number>>,
];

export type TestCases = Cases;

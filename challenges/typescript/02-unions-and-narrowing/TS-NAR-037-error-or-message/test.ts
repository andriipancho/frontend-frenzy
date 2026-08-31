import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { errorMessage } from "./task.js";

errorMessage(new Error("offline"));
errorMessage("offline");

// @ts-expect-error the declared parameter type must not widen
errorMessage(42);

type Cases = [
  Expect<Equal<Parameters<typeof errorMessage>, [Error | string]>>,
  Expect<Equal<ReturnType<typeof errorMessage>, string>>,
];

export type TestCases = Cases;

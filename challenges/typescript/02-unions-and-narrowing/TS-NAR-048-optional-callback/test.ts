import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { complete } from "./task.js";

complete((result) => console.log(result), "ready");
complete(undefined, "ready");

// @ts-expect-error the declared parameter type must not widen
complete(undefined, 42);

type Cases = [
  Expect<Equal<Parameters<typeof complete>, [((result: string) => void) | undefined, string]>>,
  Expect<Equal<ReturnType<typeof complete>, void>>,
];

export type TestCases = Cases;

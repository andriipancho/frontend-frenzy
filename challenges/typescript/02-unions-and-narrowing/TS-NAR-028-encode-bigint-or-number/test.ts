import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { encodeInteger } from "./task.js";

encodeInteger(10);
encodeInteger(10n);

// @ts-expect-error the declared parameter type must not widen
encodeInteger("10");

type Cases = [
  Expect<Equal<Parameters<typeof encodeInteger>, [bigint | number]>>,
  Expect<Equal<ReturnType<typeof encodeInteger>, string>>,
];

export type TestCases = Cases;

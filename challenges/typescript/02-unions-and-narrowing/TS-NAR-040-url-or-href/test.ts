import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { toHref } from "./task.js";

toHref(new URL("https://example.com"));
toHref("https://example.com");

// @ts-expect-error the declared parameter type must not widen
toHref(42);

type Cases = [
  Expect<Equal<Parameters<typeof toHref>, [URL | string]>>,
  Expect<Equal<ReturnType<typeof toHref>, string>>,
];

export type TestCases = Cases;

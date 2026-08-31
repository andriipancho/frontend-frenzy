import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { themeName } from "./task.js";

themeName({ theme: { name: "dark" } });
themeName({});

// @ts-expect-error the declared parameter type must not widen
themeName({ theme: {} });

type Cases = [
  Expect<Equal<Parameters<typeof themeName>, [{ theme?: { name: string } }]>>,
  Expect<Equal<ReturnType<typeof themeName>, string>>,
];

export type TestCases = Cases;

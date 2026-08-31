import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { summarizeInput } from "./task.js";

summarizeInput({ key: "Enter", code: "Enter" });
summarizeInput({ x: 120, y: 80 });

// @ts-expect-error the declared parameter type must not widen
summarizeInput({ key: "Enter" });

type Cases = [
  Expect<Equal<Parameters<typeof summarizeInput>, [{ key: string; code: string } | { x: number; y: number }]>>,
  Expect<Equal<ReturnType<typeof summarizeInput>, string>>,
];

export type TestCases = Cases;

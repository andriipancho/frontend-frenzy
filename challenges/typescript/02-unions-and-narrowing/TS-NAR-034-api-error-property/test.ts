import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { resultMessage } from "./task.js";

resultMessage({ data: "loaded" });
resultMessage({ error: { message: "offline", status: 503 } });

// @ts-expect-error the declared parameter type must not widen
resultMessage({ error: { message: "offline" } });

type Cases = [
  Expect<Equal<Parameters<typeof resultMessage>, [{ data: string } | { error: { message: string; status: number } }]>>,
  Expect<Equal<ReturnType<typeof resultMessage>, string>>,
];

export type TestCases = Cases;

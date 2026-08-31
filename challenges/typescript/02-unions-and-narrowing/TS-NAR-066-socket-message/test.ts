import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { socketSummary } from "./task.js";

socketSummary({ type: "text", text: "hello" });
socketSummary({ type: "presence", userId: "u1", online: true });
socketSummary({ type: "error", message: "offline" });

// @ts-expect-error the declared parameter type must not widen
socketSummary({ type: "text" });

type Cases = [
  Expect<Equal<Parameters<typeof socketSummary>, [{ type: "text"; text: string } | { type: "presence"; userId: string; online: boolean } | { type: "error"; message: string }]>>,
  Expect<Equal<ReturnType<typeof socketSummary>, string>>,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { renderAsyncState } from "./task.js";

renderAsyncState({ status: "idle" });
renderAsyncState({ status: "loading", startedAt: new Date() });
renderAsyncState({ status: "success", data: "ready" });
renderAsyncState({ status: "failure", error: "offline" });
renderAsyncState({ status: "cancelled", reason: "navigation" });

// @ts-expect-error the declared parameter type must not widen
renderAsyncState({ status: "done" });

type Cases = [
  Expect<Equal<Parameters<typeof renderAsyncState>, [{ status: "idle" } | { status: "loading"; startedAt: Date } | { status: "success"; data: string } | { status: "failure"; error: string } | { status: "cancelled"; reason: string }]>>,
  Expect<Equal<ReturnType<typeof renderAsyncState>, string>>,
];

export type TestCases = Cases;

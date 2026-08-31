import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { commandSummary } from "./task.js";

commandSummary({ kind: "connect", endpoint: "wss://example.com" });
commandSummary({ kind: "send", data: "ping" });
commandSummary({ kind: "disconnect", reason: "closed" });

// @ts-expect-error the declared parameter type must not widen
commandSummary({ kind: "reconnect", endpoint: "wss://example.com" });

type Cases = [
  Expect<Equal<Parameters<typeof commandSummary>, [{ kind: "connect"; endpoint: string } | { kind: "send"; data: string } | { kind: "disconnect"; reason: string }]>>,
  Expect<Equal<ReturnType<typeof commandSummary>, string>>,
];

export type TestCases = Cases;

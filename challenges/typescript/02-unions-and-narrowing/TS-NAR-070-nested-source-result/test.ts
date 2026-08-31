import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { sourceText } from "./task.js";

sourceText({ source: "network", result: { ok: true, data: "fresh" } });
sourceText({ source: "network", result: { ok: false, error: "offline" } });
sourceText({ source: "cache", result: { state: "hit", value: "cached" } });
sourceText({ source: "cache", result: { state: "miss" } });

// @ts-expect-error the declared parameter type must not widen
sourceText({ source: "network", result: { state: "hit", value: "cached" } });

type Cases = [
  Expect<Equal<Parameters<typeof sourceText>, [{ source: "network"; result: { ok: true; data: string } | { ok: false; error: string } } | { source: "cache"; result: { state: "hit"; value: string } | { state: "miss" } }]>>,
  Expect<Equal<ReturnType<typeof sourceText>, string>>,
];

export type TestCases = Cases;

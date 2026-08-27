import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RequestConfig } from "./task.js";

type Expected = { timeoutMs?: number };
type Cases = [Expect<Equal<RequestConfig, Expected>>];
const defaults: RequestConfig = {};
const custom: RequestConfig = { timeoutMs: 5000 };
// @ts-expect-error an explicitly present timeout must be numeric
const invalid: RequestConfig = { timeoutMs: undefined };
void defaults;
void custom;
void invalid;
export type TestCases = Cases;

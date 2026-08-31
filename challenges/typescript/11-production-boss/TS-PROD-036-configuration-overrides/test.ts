import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ConfigOverride } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ConfigOverride<{ server: { host: string; tls: { enabled: boolean; cert: string } }; plugins: readonly string[] }>,
      { server?: { host?: string; tls?: { enabled?: boolean; cert?: string } }; plugins?: readonly string[] }
    >
  >,
];

export type TestCases = Cases;

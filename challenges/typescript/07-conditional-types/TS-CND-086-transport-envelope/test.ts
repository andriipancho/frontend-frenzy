import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TransportEnvelope } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TransportEnvelope<{ id: string }, true>,
      { source: "network"; data: { id: string }; receivedAt: Date }
    >
  >,
  Expect<
    Equal<
      TransportEnvelope<string[], false>,
      { source: "cache"; data: string[]; stale: boolean }
    >
  >,
];

export type TestCases = Cases;

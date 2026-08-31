import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EndpointClient } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EndpointClient<{ profile: { request: { id: string }; response: { name: string }; auth: true }; health: { request: void; response: { ok: true }; auth: false } }>,
      { profile: (token: string, request: { id: string }) => Promise<{ name: string }>; health: (request: void) => Promise<{ ok: true }> }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EndpointClient, Endpoints } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EndpointClient<Endpoints>,
      { getUser: (request: { id: string }) => Promise<{ name: string }>; search: (request: { query: string; limit?: number }) => Promise<readonly string[]> }
    >
  >,
];

export type TestCases = Cases;

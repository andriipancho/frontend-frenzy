import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EndpointResponses } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EndpointResponses<{ users: { response: { ids: string[] } }; health: { response: { ok: true } }; invalid: string }>,
      { users: { ids: string[] }; health: { ok: true }; invalid: never }
    >
  >,
];

export type TestCases = Cases;

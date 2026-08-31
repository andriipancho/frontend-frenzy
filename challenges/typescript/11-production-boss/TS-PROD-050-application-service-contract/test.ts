import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApplicationServices, ServiceSpec } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ApplicationServices<ServiceSpec>,
      { users: { commands: { create: (payload: { email: string }) => Promise<void>; remove: (payload: { id: string }) => Promise<void> }; queries: { byId: (input: { id: string }) => Promise<{ name: string }> } }; teams: { commands: { archive: (payload: { id: string }) => Promise<void> }; queries: { members: (input: { teamId: string }) => Promise<readonly string[]> } } }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RestClient, ApiSchema } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RestClient<ApiSchema>,
      { getUser: (params: { id: string }) => Promise<{ name: string }>; updateUser: (params: { id: string }, body: { name?: string }) => Promise<{ updated: true }> }
    >
  >,
];

export type TestCases = Cases;

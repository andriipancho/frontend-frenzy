import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RouterContract, Routes } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RouterContract<Routes>,
      { "/users/:id": { method: "GET"; handle(params: { id: string }): Promise<{ id: string }> }; "/teams/:teamId/members/:memberId": { method: "DELETE"; handle(params: { teamId: string; memberId: string }): Promise<{ removed: true }> } }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RouteParameters } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RouteParameters<"/teams/:teamId/users/:userId">,
      { teamId: string; userId: string }
    >
  >,
  Expect<
    Equal<
      RouteParameters<"/health">,
      {}
    >
  >,
];

export type TestCases = Cases;

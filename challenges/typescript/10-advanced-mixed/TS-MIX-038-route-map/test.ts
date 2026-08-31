import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RouteNames } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RouteNames<{users:"/users";health:"/health"}>,
      {routeUsers:"/users";routeHealth:"/health"}
    >
  >,
];
export type TestCases = Cases;

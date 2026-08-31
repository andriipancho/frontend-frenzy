import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { NestedRouteParameter } from "./task.js";

type Cases = [
  Expect<
    Equal<
      NestedRouteParameter<"/users/:userId/posts">,
      "userId"
    >
  >,
  Expect<
    Equal<
      NestedRouteParameter<"/posts/:slug">,
      "slug"
    >
  >,
  Expect<
    Equal<
      NestedRouteParameter<"/health">,
      never
    >
  >,
];

export type TestCases = Cases;

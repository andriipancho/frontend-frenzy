import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RouteParameter } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RouteParameter<"/users/:userId">,
      "userId"
    >
  >,
  Expect<
    Equal<
      RouteParameter<"/posts/:slug">,
      "slug"
    >
  >,
  Expect<
    Equal<
      RouteParameter<"/health">,
      never
    >
  >,
];

export type TestCases = Cases;

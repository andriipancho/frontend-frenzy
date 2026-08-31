import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RouteParameters } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RouteParameters<"/users/:userId/posts/:postId">,
      "userId"|"postId"
    >
  >,
  Expect<
    Equal<
      RouteParameters<"/files/:path">,
      "path"
    >
  >,
  Expect<
    Equal<
      RouteParameters<"/health">,
      never
    >
  >,
];

export type TestCases = Cases;

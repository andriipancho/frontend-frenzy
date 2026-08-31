import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResourceRoute } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResourceRoute<"users", 42>,
      "/users/42"
    >
  >,
  Expect<
    Equal<
      ResourceRoute<"posts", "draft">,
      "/posts/draft"
    >
  >,
];

export type TestCases = Cases;

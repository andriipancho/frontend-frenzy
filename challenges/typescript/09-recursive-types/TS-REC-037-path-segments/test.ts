import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PathSegments } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PathSegments<"/users/42/profile">,
      ["users","42","profile"]
    >
  >,
  Expect<
    Equal<
      PathSegments<"settings/display">,
      ["settings","display"]
    >
  >,
  Expect<
    Equal<
      PathSegments<"">,
      []
    >
  >,
];

export type TestCases = Cases;

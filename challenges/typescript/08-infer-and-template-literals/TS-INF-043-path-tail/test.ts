import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PathTail } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PathTail<"users/42/profile">,
      "42/profile"
    >
  >,
  Expect<
    Equal<
      PathTail<"api/v1">,
      "v1"
    >
  >,
  Expect<
    Equal<
      PathTail<"settings">,
      ""
    >
  >,
];

export type TestCases = Cases;

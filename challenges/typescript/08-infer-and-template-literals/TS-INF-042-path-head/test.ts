import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PathHead } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PathHead<"users/42/profile">,
      "users"
    >
  >,
  Expect<
    Equal<
      PathHead<"settings">,
      "settings"
    >
  >,
  Expect<
    Equal<
      PathHead<"api/v1">,
      "api"
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StripPrefix } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StripPrefix<"user:get", "user:">,
      "get"
    >
  >,
  Expect<
    Equal<
      StripPrefix<"settings", "user:">,
      "settings"
    >
  >,
  Expect<
    Equal<
      StripPrefix<"pre-prefix", "pre-">,
      "prefix"
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KebabPair } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KebabPair<"User", "Profile">,
      "user-profile"
    >
  >,
  Expect<
    Equal<
      KebabPair<"API", "CLIENT">,
      "api-client"
    >
  >,
];

export type TestCases = Cases;

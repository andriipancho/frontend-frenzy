import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { KebabToCamel } from "./task.js";

type Cases = [
  Expect<
    Equal<
      KebabToCamel<"user-profile-name">,
      "userProfileName"
    >
  >,
  Expect<
    Equal<
      KebabToCamel<"already">,
      "already"
    >
  >,
  Expect<
    Equal<
      KebabToCamel<"api-response">,
      "apiResponse"
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SnakeToCamel } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SnakeToCamel<"user_profile_name">,
      "userProfileName"
    >
  >,
  Expect<
    Equal<
      SnakeToCamel<"already">,
      "already"
    >
  >,
  Expect<
    Equal<
      SnakeToCamel<"api_response">,
      "apiResponse"
    >
  >,
];

export type TestCases = Cases;

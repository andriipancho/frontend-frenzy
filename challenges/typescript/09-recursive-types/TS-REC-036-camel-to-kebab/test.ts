import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CamelToKebab } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CamelToKebab<"userProfileName">,
      "user-profile-name"
    >
  >,
  Expect<
    Equal<
      CamelToKebab<"already">,
      "already"
    >
  >,
  Expect<
    Equal<
      CamelToKebab<"apiResponse">,
      "api-response"
    >
  >,
];

export type TestCases = Cases;

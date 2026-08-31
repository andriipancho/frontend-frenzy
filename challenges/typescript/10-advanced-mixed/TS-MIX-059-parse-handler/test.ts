import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParseHandler } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParseHandler<"onUserSaved">,
      "userSaved"
    >
  >,
];
export type TestCases = Cases;

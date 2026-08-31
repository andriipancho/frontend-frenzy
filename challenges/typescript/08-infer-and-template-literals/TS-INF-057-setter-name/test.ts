import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SetterName } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SetterName<"name">,
      "setName"
    >
  >,
  Expect<
    Equal<
      SetterName<"userId">,
      "setUserId"
    >
  >,
  Expect<
    Equal<
      SetterName<"x" | "y">,
      "setX" | "setY"
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AccessDecision } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AccessDecision<"admin", false>,
      true
    >
  >,
  Expect<
    Equal<
      AccessDecision<"member", true>,
      true
    >
  >,
  Expect<
    Equal<
      AccessDecision<"member" | "guest", false>,
      false
    >
  >,
];

export type TestCases = Cases;

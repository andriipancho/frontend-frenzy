import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StatusFamily } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StatusFamily<200 | 204>,
      "success"
    >
  >,
  Expect<
    Equal<
      StatusFamily<404 | 503>,
      "client-error" | "server-error"
    >
  >,
  Expect<
    Equal<
      StatusFamily<302>,
      "other"
    >
  >,
];

export type TestCases = Cases;

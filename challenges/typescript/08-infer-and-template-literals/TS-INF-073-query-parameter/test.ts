import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { QueryParameter } from "./task.js";

type Cases = [
  Expect<
    Equal<
      QueryParameter<"page=2">,
      { page: "2" }
    >
  >,
  Expect<
    Equal<
      QueryParameter<"filter=active=true">,
      { filter: "active=true" }
    >
  >,
  Expect<
    Equal<
      QueryParameter<"invalid">,
      never
    >
  >,
];

export type TestCases = Cases;

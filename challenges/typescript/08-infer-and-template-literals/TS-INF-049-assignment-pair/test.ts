import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AssignmentPair } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AssignmentPair<"page=2">,
      { key: "page"; value: "2" }
    >
  >,
  Expect<
    Equal<
      AssignmentPair<"mode=compact=true">,
      { key: "mode"; value: "compact=true" }
    >
  >,
  Expect<
    Equal<
      AssignmentPair<"invalid">,
      never
    >
  >,
];

export type TestCases = Cases;

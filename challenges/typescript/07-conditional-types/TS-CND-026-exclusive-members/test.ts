import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ExclusiveMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ExclusiveMembers<"read" | "write", "write" | "delete">,
      "read" | "delete"
    >
  >,
  Expect<
    Equal<
      ExclusiveMembers<1 | 2, 1 | 2>,
      never
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SharedMembers } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SharedMembers<"read" | "write" | "delete", "read" | "delete" | "share">,
      "read" | "delete"
    >
  >,
  Expect<
    Equal<
      SharedMembers<1 | 2, 3 | 4>,
      never
    >
  >,
];

export type TestCases = Cases;

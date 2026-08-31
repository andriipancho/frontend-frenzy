import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CanPerform } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CanPerform<"owner", "delete">,
      true
    >
  >,
  Expect<
    Equal<
      CanPerform<"editor", "read" | "write">,
      true
    >
  >,
  Expect<
    Equal<
      CanPerform<"viewer", "read" | "delete">,
      boolean
    >
  >,
];

export type TestCases = Cases;

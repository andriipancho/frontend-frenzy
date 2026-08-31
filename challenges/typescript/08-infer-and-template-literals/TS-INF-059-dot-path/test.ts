import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DotPath } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DotPath<"user", "name">,
      "user.name"
    >
  >,
  Expect<
    Equal<
      DotPath<"settings.display", "theme">,
      "settings.display.theme"
    >
  >,
];

export type TestCases = Cases;

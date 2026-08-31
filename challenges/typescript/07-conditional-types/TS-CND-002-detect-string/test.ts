import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { IsString } from "./task.js";

type Cases = [
  Expect<
    Equal<
      IsString<string>,
      true
    >
  >,
  Expect<
    Equal<
      IsString<42>,
      false
    >
  >,
  Expect<
    Equal<
      IsString<"ready" | 0>,
      boolean
    >
  >,
];

export type TestCases = Cases;

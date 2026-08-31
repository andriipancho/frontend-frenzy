import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { StripSuffix } from "./task.js";

type Cases = [
  Expect<
    Equal<
      StripSuffix<"avatar.png", ".png">,
      "avatar"
    >
  >,
  Expect<
    Equal<
      StripSuffix<"avatar.jpg", ".png">,
      "avatar.jpg"
    >
  >,
  Expect<
    Equal<
      StripSuffix<"draft.test", ".test">,
      "draft"
    >
  >,
];

export type TestCases = Cases;

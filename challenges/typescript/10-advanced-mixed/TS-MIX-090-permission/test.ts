import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedPermission } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedPermission<"viewer","read"|"delete">,
      boolean
    >
  >,
];
export type TestCases = Cases;

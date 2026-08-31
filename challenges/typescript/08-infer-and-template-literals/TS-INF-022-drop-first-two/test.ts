import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DropFirstTwo } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DropFirstTwo<[string, number, boolean, Date]>,
      [boolean, Date]
    >
  >,
  Expect<
    Equal<
      DropFirstTwo<readonly [1, 2]>,
      []
    >
  >,
  Expect<
    Equal<
      DropFirstTwo<[1]>,
      []
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PickArray } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PickArray<{tags:string[];id:string;pair:readonly [1,2]}>,
      Pick<{tags:string[];id:string;pair:readonly [1,2]},"tags"|"pair">
    >
  >,
];
export type TestCases = Cases;

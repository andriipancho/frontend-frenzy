import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ArrayKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ArrayKeys<{tags:string[];id:string;pair:readonly [1,2]}>,
      "tags"|"pair"
    >
  >,
];
export type TestCases = Cases;

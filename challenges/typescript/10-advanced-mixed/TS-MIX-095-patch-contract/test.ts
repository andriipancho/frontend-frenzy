import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MixedPatch } from "./task.js";

type Cases = [
  Expect<
    Equal<
      MixedPatch<{user:{name:string};tags:string[]}>,
      {user?:{name?:string};tags?:string[]}
    >
  >,
];
export type TestCases = Cases;

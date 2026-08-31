import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMixedPartial } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMixedPartial<{user:{name:string};active:boolean}>,
      {user?:{name?:string};active?:boolean}
    >
  >,
];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepPromises } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepPromises<{id:string;flags:[true,0]}>,
      {id:Promise<string>;flags:[Promise<true>,Promise<0>]}
    >
  >,
  Expect<
    Equal<
      DeepPromises<number>,
      Promise<number>
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResolveTuple } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResolveTuple<[Promise<string>,number,Promise<true>]>,
      [string,number,true]
    >
  >,
];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AsyncNames } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AsyncNames<{user:string;count:number}>,
      {userAsync:(...args:never[])=>Promise<string>;countAsync:(...args:never[])=>Promise<number>}
    >
  >,
];
export type TestCases = Cases;

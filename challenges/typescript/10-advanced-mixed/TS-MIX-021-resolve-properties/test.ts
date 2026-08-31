import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResolveMixed } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResolveMixed<{user:Promise<string>;count:number}>,
      {user:string;count:number}
    >
  >,
];
export type TestCases = Cases;

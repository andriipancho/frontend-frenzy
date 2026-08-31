import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMutable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMutable<{readonly user:{readonly name:string};readonly tags:readonly string[]}>,
      {user:{name:string};tags:string[]}
    >
  >,
  Expect<
    Equal<
      DeepMutable<Date>,
      {[Key in keyof Date]:Date[Key]}
    >
  >,
];

export type TestCases = Cases;

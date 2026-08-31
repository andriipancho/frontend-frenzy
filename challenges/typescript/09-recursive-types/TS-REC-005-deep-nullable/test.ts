import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepNullable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepNullable<{user:{name:string};active:boolean}>,
      {user:{name:string|null}|null;active:boolean|null}
    >
  >,
  Expect<
    Equal<
      DeepNullable<string>,
      string
    >
  >,
];

export type TestCases = Cases;

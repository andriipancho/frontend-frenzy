import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepDefined } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepDefined<{user:{name:string|null}|undefined;active:boolean|null}>,
      {user:{name:string};active:boolean}
    >
  >,
  Expect<
    Equal<
      DeepDefined<string|null|undefined>,
      string
    >
  >,
];

export type TestCases = Cases;

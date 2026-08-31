import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepRequiredDefined } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepRequiredDefined<{user?:{name?:string|null}|null;active?:boolean}>,
      {user:{name:string};active:boolean}
    >
  >,
  Expect<
    Equal<
      DeepRequiredDefined<string|undefined>,
      string
    >
  >,
];

export type TestCases = Cases;

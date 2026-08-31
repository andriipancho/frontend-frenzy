import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMixedDefined } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMixedDefined<{user:{name:string|null}|undefined}>,
      {user:{name:string}}
    >
  >,
];
export type TestCases = Cases;

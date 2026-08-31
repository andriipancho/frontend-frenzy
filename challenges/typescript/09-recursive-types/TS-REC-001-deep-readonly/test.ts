import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepReadonly } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepReadonly<{user:{name:string};tags:string[]}>,
      {readonly user:{readonly name:string};readonly tags:readonly string[]}
    >
  >,
  Expect<
    Equal<
      DeepReadonly<() => string>,
      () => string
    >
  >,
];

export type TestCases = Cases;

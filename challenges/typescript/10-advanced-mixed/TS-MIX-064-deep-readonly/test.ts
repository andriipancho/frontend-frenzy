import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMixedReadonly } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMixedReadonly<{user:{name:string};tags:string[]}>,
      {readonly user:{readonly name:string};readonly tags:readonly string[]}
    >
  >,
];
export type TestCases = Cases;

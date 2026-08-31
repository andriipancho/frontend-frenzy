import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepAwaited } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepAwaited<Promise<Promise<string>>>,
      string
    >
  >,
  Expect<
    Equal<
      DeepAwaited<Promise<{id:string}>>,
      {id:string}
    >
  >,
  Expect<
    Equal<
      DeepAwaited<number>,
      number
    >
  >,
];

export type TestCases = Cases;

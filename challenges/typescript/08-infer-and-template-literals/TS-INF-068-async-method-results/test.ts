import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { AsyncMethodResults } from "./task.js";

type Cases = [
  Expect<
    Equal<
      AsyncMethodResults<{ load: (id: string) => Promise<{ id: string }>; save: () => PromiseLike<true>; reset: () => void }>,
      { load: { id: string }; save: true; reset: never }
    >
  >,
];

export type TestCases = Cases;

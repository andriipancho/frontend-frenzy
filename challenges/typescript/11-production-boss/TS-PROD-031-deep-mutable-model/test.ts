import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepMutable } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepMutable<{ readonly user: { readonly name: string }; readonly tags: readonly string[]; readonly save: () => void }>,
      { user: { name: string }; tags: string[]; save: () => void }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RepositoryLookup } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RepositoryLookup<{ id: string }, true>,
      { found: true; entity: { id: string } } | { found: false; reason: "missing" }
    >
  >,
  Expect<
    Equal<
      RepositoryLookup<{ id: string }, false>,
      { id: string } | null
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CacheValueKind } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CacheValueKind<undefined | null>,
      "missing"
    >
  >,
  Expect<
    Equal<
      CacheValueKind<Promise<string>>,
      "async"
    >
  >,
  Expect<
    Equal<
      CacheValueKind<{ id: string } | 1>,
      "structured" | "scalar"
    >
  >,
];

export type TestCases = Cases;

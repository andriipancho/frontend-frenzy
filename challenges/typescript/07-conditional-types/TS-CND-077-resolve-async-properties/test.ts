import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResolveProperties } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResolveProperties<{ user: Promise<string>; count: number; ready: Promise<Promise<boolean>> }>,
      { user: string; count: number; ready: boolean }
    >
  >,
  Expect<
    Equal<
      ResolveProperties<{ value: null }>,
      { value: null }
    >
  >,
];

export type TestCases = Cases;

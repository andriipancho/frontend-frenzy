import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { TaggedMember } from "./task.js";

type Cases = [
  Expect<
    Equal<
      TaggedMember<"a" | 1>,
      { value: "a"; source: "a" } | { value: 1; source: 1 }
    >
  >,
  Expect<
    Equal<
      TaggedMember<boolean>,
      { value: false; source: false } | { value: true; source: true }
    >
  >,
];

export type TestCases = Cases;

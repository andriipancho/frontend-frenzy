import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PatchPolicies } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PatchPolicies<{ name: string; tags: string[]; profile: { bio: string; age: number } }>,
      { name: { set: string }; tags: { replace: string[] }; profile: { merge: { bio?: string; age?: number } } }
    >
  >,
];

export type TestCases = Cases;

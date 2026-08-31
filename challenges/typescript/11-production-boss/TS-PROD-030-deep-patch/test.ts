import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DeepPatch } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DeepPatch<{ user: { name: string; address: { city: string } }; tags: readonly string[] }>,
      { user?: { name?: string; address?: { city?: string } }; tags?: readonly string[] }
    >
  >,
];

export type TestCases = Cases;

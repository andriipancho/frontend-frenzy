import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { JsonSafe } from "./task.js";

type Cases = [
  Expect<
    Equal<
      JsonSafe<{ id: string; createdAt: Date; tags: readonly string[]; refresh(): void }>,
      { id: string; createdAt: string; tags: string[] }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FieldDescriptors } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FieldDescriptors<{ id: string; note: string | null; tags: readonly string[] }>,
      { id: { value: string; nullable: false }; note: { value: string | null; nullable: true }; tags: { value: readonly string[]; collection: true } }
    >
  >,
];

export type TestCases = Cases;

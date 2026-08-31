import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SerializerRegistry, RecordShape } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SerializerRegistry<RecordShape>,
      { createdAt: { serialize(value: Date): string; parse(raw: string): Date }; tags: { serialize(value: readonly string[]): string; parse(raw: string): readonly string[] }; score: { serialize(value: number): string; parse(raw: string): number } }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { SerializationMode } from "./task.js";

type Cases = [
  Expect<
    Equal<
      SerializationMode<string>,
      "raw"
    >
  >,
  Expect<
    Equal<
      SerializationMode<Uint8Array>,
      "binary"
    >
  >,
  Expect<
    Equal<
      SerializationMode<readonly number[] | { id: string }>,
      "json-array" | "json-object"
    >
  >,
];

export type TestCases = Cases;

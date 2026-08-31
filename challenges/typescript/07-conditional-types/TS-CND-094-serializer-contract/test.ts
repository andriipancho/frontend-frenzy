import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Serializer } from "./task.js";

type Cases = [
  Expect<
    Equal<
      Serializer<"raw">,
      (value: "raw") => string
    >
  >,
  Expect<
    Equal<
      Serializer<Uint8Array>,
      (value: Uint8Array) => Uint8Array
    >
  >,
  Expect<
    Equal<
      Serializer<{ id: string }>,
      (value: { id: string }) => string
    >
  >,
  Expect<
    Equal<
      Serializer<number>,
      never
    >
  >,
];

export type TestCases = Cases;

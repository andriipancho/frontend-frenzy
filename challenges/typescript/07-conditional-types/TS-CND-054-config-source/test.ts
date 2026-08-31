import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ConfigSource } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ConfigSource<{ env: "PORT" }>,
      "environment"
    >
  >,
  Expect<
    Equal<
      ConfigSource<{ file: string } | { defaults: { port: number } }>,
      "file" | "defaults"
    >
  >,
  Expect<
    Equal<
      ConfigSource<{ port: number }>,
      "inline"
    >
  >,
];

export type TestCases = Cases;

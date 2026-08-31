import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ReturnOr } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ReturnOr<(id: string) => number, never>,
      number
    >
  >,
  Expect<
    Equal<
      ReturnOr<() => Promise<string>, null>,
      Promise<string>
    >
  >,
  Expect<
    Equal<
      ReturnOr<{ run: true }, false>,
      false
    >
  >,
];

export type TestCases = Cases;

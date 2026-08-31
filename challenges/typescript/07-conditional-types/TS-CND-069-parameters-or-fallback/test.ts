import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ParametersOr } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ParametersOr<(id: string, force: boolean) => void, []>,
      [id: string, force: boolean]
    >
  >,
  Expect<
    Equal<
      ParametersOr<() => void, [never]>,
      []
    >
  >,
  Expect<
    Equal<
      ParametersOr<string, ["invalid"]>,
      ["invalid"]
    >
  >,
];

export type TestCases = Cases;

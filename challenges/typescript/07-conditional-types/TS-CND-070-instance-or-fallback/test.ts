import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { InstanceOr } from "./task.js";

type Cases = [
  Expect<
    Equal<
      InstanceOr<typeof Date, never>,
      Date
    >
  >,
  Expect<
    Equal<
      InstanceOr<{ new (): Map<string, number> }, null>,
      Map<string, number>
    >
  >,
  Expect<
    Equal<
      InstanceOr<() => void, "not-constructor">,
      "not-constructor"
    >
  >,
];

export type TestCases = Cases;

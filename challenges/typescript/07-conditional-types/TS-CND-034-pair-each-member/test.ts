import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PairEach } from "./task.js";

type Cases = [
  Expect<
    Equal<
      PairEach<"start" | "stop", { at: Date }>,
      ["start", { at: Date }] | ["stop", { at: Date }]
    >
  >,
  Expect<
    Equal<
      PairEach<never, 0>,
      never
    >
  >,
];

export type TestCases = Cases;

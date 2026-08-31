import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ServiceInstances } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ServiceInstances<{ map: MapConstructor; set: SetConstructor; date: DateConstructor }>,
      { map: Map<unknown, unknown>; set: Set<unknown>; date: Date }
    >
  >,
];

export type TestCases = Cases;

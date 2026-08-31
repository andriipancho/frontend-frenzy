import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FactoryRegistry, Services } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FactoryRegistry<Services>,
      { clock: () => Date; cache: () => Map<string, string>; queue: () => Set<string> }
    >
  >,
];

export type TestCases = Cases;

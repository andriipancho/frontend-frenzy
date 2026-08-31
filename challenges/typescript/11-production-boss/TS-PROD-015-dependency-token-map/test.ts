import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DependencyTokens, Dependencies } from "./task.js";

type Cases = [
  Expect<
    Equal<
      DependencyTokens<Dependencies>,
      { "DI:LOGGER": { readonly key: "logger"; readonly service: Dependencies["logger"] }; "DI:STORAGE": { readonly key: "storage"; readonly service: Dependencies["storage"] } }
    >
  >,
];

export type TestCases = Cases;

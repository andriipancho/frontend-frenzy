import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { FeatureResolvers, Features, RequestContext } from "./task.js";

type Cases = [
  Expect<
    Equal<
      FeatureResolvers<Features, RequestContext>,
      { beta: boolean | ((context: RequestContext) => boolean); region: string | ((context: RequestContext) => string); maxItems: number | ((context: RequestContext) => number) }
    >
  >,
];

export type TestCases = Cases;

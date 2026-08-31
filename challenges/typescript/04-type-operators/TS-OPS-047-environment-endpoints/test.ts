import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { endpointsByEnvironment } from "./task.js";

type Cases = [
  Expect<Equal<typeof endpointsByEnvironment.development, "https://dev.example.com">>,
  Expect<Equal<keyof typeof endpointsByEnvironment, "development" | "staging" | "production">>,
];
// @ts-expect-error endpoints must be readonly
endpointsByEnvironment.production = "https://other.example.com";
export type TestCases = Cases;

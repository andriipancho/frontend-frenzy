import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Environment, ServicesByEnvironment } from "./task.js";

type Cases = [
  Expect<Equal<keyof ServicesByEnvironment, Environment>>,
  Expect<Equal<
    ServicesByEnvironment["production"],
    { apiUrl: string; timeoutMs: number }
  >>,
];
export type TestCases = Cases;

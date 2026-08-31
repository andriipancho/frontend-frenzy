import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EnvironmentKeys } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EnvironmentKeys<{ host: string; port: number; debug: boolean }, "api">,
      { API_HOST: string; API_PORT: string; API_DEBUG: "true" | "false" }
    >
  >,
];

export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EnvironmentName } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EnvironmentName<"app", "port">,
      "APP_PORT"
    >
  >,
  Expect<
    Equal<
      EnvironmentName<"database", "url">,
      "DATABASE_URL"
    >
  >,
];

export type TestCases = Cases;

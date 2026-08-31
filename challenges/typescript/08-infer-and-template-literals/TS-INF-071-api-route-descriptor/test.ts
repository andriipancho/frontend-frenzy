import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApiRoute } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ApiRoute<"/v1/users">,
      { version: 1; resource: "users" }
    >
  >,
  Expect<
    Equal<
      ApiRoute<"/v12/admin/reports">,
      { version: 12; resource: "admin/reports" }
    >
  >,
  Expect<
    Equal<
      ApiRoute<"/users">,
      never
    >
  >,
];

export type TestCases = Cases;

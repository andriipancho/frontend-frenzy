import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";

import { routes } from "./task.js";

type Cases = [
  Expect<Equal<typeof routes.users.method, "GET">>,
  Expect<Equal<typeof routes.createUser.path, "/users">>,
];

// @ts-expect-error route definitions must be readonly
routes.users.method = "POST";

export type TestCases = Cases;

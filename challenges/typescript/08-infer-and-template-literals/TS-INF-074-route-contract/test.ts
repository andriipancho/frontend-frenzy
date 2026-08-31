import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RouteContract } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RouteContract<"GET /users">,
      { method: "get"; path: "/users" }
    >
  >,
  Expect<
    Equal<
      RouteContract<"DELETE /users/:id">,
      { method: "delete"; path: "/users/:id" }
    >
  >,
  Expect<
    Equal<
      RouteContract<"PATCH /users">,
      never
    >
  >,
];

export type TestCases = Cases;

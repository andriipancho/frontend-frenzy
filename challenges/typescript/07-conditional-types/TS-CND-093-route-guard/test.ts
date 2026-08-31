import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RouteGuard } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RouteGuard<{ auth: false }>,
      { kind: "public" }
    >
  >,
  Expect<
    Equal<
      RouteGuard<{ auth: true; roles: readonly ["admin", "editor"] }>,
      { kind: "roles"; allowed: "admin" | "editor" }
    >
  >,
  Expect<
    Equal<
      RouteGuard<{ auth: true }>,
      { kind: "authenticated" }
    >
  >,
];

export type TestCases = Cases;

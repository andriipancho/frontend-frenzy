import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { RoleAccess } from "./task.js";

type Cases = [
  Expect<
    Equal<
      RoleAccess<"owner">,
      "full"
    >
  >,
  Expect<
    Equal<
      RoleAccess<"editor" | "viewer">,
      "write" | "read"
    >
  >,
  Expect<
    Equal<
      RoleAccess<"guest">,
      "none"
    >
  >,
];

export type TestCases = Cases;

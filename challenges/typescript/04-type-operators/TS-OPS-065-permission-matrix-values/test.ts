import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Permission, Role } from "./task.js";

type Cases = [
  Expect<Equal<Role, "admin" | "editor" | "viewer">>,
  Expect<Equal<Permission, "read" | "write" | "delete">>,
];
export type TestCases = Cases;

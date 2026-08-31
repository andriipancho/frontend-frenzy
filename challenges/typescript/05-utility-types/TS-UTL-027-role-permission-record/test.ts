import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Permission, PermissionsByRole, Role } from "./task.js";

type Cases = [
  Expect<Equal<keyof PermissionsByRole, Role>>,
  Expect<Equal<PermissionsByRole["admin"], readonly Permission[]>>,
];
export type TestCases = Cases;

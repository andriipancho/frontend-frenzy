import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Permissions, User, UserWithPermissions } from "./task.js";

type Expected = User & Permissions;
type Cases = [Expect<Equal<UserWithPermissions, Expected>>];
const user: UserWithPermissions = { id: "u1", name: "Ada", permissions: ["read"] };
void user;

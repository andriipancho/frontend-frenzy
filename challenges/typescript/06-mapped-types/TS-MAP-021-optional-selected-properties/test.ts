import type { OptionalKeys } from "./task.js";

type User = { id: string; name: string; active: boolean };
const valid: OptionalKeys<User, "name" | "active"> = { id: "u1" };
// @ts-expect-error id remains required
const invalid: OptionalKeys<User, "name"> = { name: "Ada" };
void valid;
void invalid;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { filterBy } from "./task.js";

type User = { id: string; role: "admin" | "viewer" };
const users: User[] = [
  { id: "u1", role: "admin" },
  { id: "u2", role: "viewer" },
];
const admins = filterBy(users, "role", "admin");
type Cases = [Expect<Equal<typeof admins, User[]>>];
// @ts-expect-error role does not accept numbers
filterBy(users, "role", 1);
export type TestCases = Cases;

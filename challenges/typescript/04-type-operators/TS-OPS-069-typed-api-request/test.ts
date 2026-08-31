import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { sendRequest } from "./task.js";

const created = sendRequest("createUser", { name: "Ada" });
const deleted = sendRequest("deleteUser", { id: "u1" });
type Cases = [
  Expect<Equal<typeof created, Promise<{ id: string; name: string }>>>,
  Expect<Equal<typeof deleted, Promise<{ deleted: boolean }>>>,
];
// @ts-expect-error createUser requires a name
sendRequest("createUser", { id: "u1" });
// @ts-expect-error unknown route
sendRequest("updateUser", { id: "u1" });
export type TestCases = Cases;

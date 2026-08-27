import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ApiClient } from "./task.js";

type Routes = {
  "/users": { users: string[] };
  "/health": { ok: boolean };
};
declare const client: ApiClient<Routes>;
const users = client.request("/users");
const health = client.request("/health");
// @ts-expect-error unknown route
client.request("/missing");
type Cases = [
  Expect<Equal<typeof users, Promise<{ users: string[] }>>>,
  Expect<Equal<typeof health, Promise<{ ok: boolean }>>>,
];
export type TestCases = Cases;

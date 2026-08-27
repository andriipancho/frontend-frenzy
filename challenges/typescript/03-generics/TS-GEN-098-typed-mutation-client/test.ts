import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { MutationClient } from "./task.js";

type Mutations = {
  createUser: {
    input: { name: string };
    output: { id: string };
  };
  deleteUser: {
    input: { id: string };
    output: { deleted: true };
  };
};
declare const client: MutationClient<Mutations>;
const created = client.execute("createUser", { name: "Ada" });
const deleted = client.execute("deleteUser", { id: "user-1" });
// @ts-expect-error createUser requires a name
client.execute("createUser", { id: "user-1" });
type Cases = [
  Expect<Equal<typeof created, Promise<{ id: string }>>>,
  Expect<Equal<typeof deleted, Promise<{ deleted: true }>>>,
];
export type TestCases = Cases;

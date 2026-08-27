import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { createRegistry } from "./task.js";

const users = createRegistry<{ id: string }>();
users.set("primary", { id: "user-1" });
// @ts-expect-error registry values require an id
users.set("secondary", { name: "Ada" });
type Cases = [
  Expect<
    Equal<ReturnType<typeof users.get>, { id: string } | undefined>
  >,
];
export type TestCases = Cases;

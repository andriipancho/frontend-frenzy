import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { findBy } from "./task.js";

const users = [
  { id: "u1", active: true },
  { id: "u2", active: false },
];
const user = findBy(users, "id", "u1");
// @ts-expect-error id queries require a string
findBy(users, "id", true);
// @ts-expect-error active queries require a boolean
findBy(users, "active", "yes");
type Cases = [
  Expect<
    Equal<
      typeof user,
      { id: string; active: boolean } | undefined
    >
  >,
];
export type TestCases = Cases;

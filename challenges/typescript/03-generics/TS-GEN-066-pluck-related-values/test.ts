import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { pluck } from "./task.js";

const users = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Grace" },
];
const names = pluck(users, "name");
const ids = pluck(users, "id");
type Cases = [
  Expect<Equal<typeof names, string[]>>,
  Expect<Equal<typeof ids, number[]>>,
];
export type TestCases = Cases;

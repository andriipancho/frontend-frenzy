import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { readProperty } from "./task.js";

const profile = { name: "Ada", visits: 3 };
const name = readProperty(profile, "name");
const visits = readProperty(profile, "visits");

type Cases = [
  Expect<Equal<typeof name, string>>,
  Expect<Equal<typeof visits, number>>,
];
// @ts-expect-error unknown key
readProperty(profile, "email");
export type TestCases = Cases;

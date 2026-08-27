import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { Field } from "./task.js";

type User = { name: string; active: boolean };
type NameField = Field<User, "name">;
type Cases = [
  Expect<Equal<NameField, { key: "name"; value: string }>>,
];
// @ts-expect-error name fields cannot hold boolean values
const invalid: NameField = { key: "name", value: false };
export type TestCases = Cases;

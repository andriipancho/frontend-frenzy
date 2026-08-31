import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { PropertyValue } from "./task.js";

type User = { id: string; age: number };
type Cases = [
  Expect<Equal<PropertyValue<User, "id">, string>>,
  Expect<Equal<PropertyValue<User, "age">, number>>,
];
export type TestCases = Cases;

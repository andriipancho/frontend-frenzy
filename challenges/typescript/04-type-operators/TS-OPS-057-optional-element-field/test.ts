import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { elementField } from "./task.js";

const names = [{ name: "Ada", age: 37 }];
const name = elementField(names, 0, "name");
const age = elementField(names, 2, "age");
type Cases = [
  Expect<Equal<typeof name, string | undefined>>,
  Expect<Equal<typeof age, number | undefined>>,
];
// @ts-expect-error invalid field
elementField(names, 0, "email");
export type TestCases = Cases;

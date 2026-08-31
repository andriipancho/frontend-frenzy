import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { pluck } from "./task.js";

const values = pluck({ id: "u1", age: 37, active: true }, ["id", "age"]);
type Cases = [Expect<Equal<typeof values, (string | number)[]>>];
// @ts-expect-error missing is not a key
pluck({ id: "u1" }, ["missing"]);
export type TestCases = Cases;

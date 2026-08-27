import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { UnknownBox } from "./task.js";

type Expected = { value: unknown };
type Cases = [Expect<Equal<UnknownBox, Expected>>];
const box: UnknownBox = { value: { id: "u1" } };
// @ts-expect-error boxed data must be narrowed first
box.value.id;
export type TestCases = Cases;

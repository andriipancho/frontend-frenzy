import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { createAccessor } from "./task.js";

const getId = createAccessor("id");
const stringId = getId({ id: "u1", name: "Ada" });
const numericId = getId({ id: 42 });
type Cases = [
  Expect<Equal<typeof stringId, string>>,
  Expect<Equal<typeof numericId, number>>,
];
// @ts-expect-error object must contain id
getId({ name: "Ada" });
export type TestCases = Cases;

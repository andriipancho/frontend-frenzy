import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { withDefault } from "./task.js";

const settings = withDefault(
  () => ({ mode: "safe" as const }),
  { mode: "safe" as const },
);
type Cases = [
  Expect<Equal<typeof settings, { mode: "safe" }>>,
];
export type TestCases = Cases;

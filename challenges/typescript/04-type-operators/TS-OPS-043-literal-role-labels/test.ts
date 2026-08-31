import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { roleLabels } from "./task.js";

type Cases = [
  Expect<Equal<typeof roleLabels.admin, "Administrator">>,
  Expect<Equal<typeof roleLabels.viewer, "Read only">>,
];
// @ts-expect-error labels must be readonly
roleLabels.editor = "Editor";
export type TestCases = Cases;

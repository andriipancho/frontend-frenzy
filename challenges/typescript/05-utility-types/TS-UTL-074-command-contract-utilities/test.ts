import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CommandArguments, CommandResult } from "./task.js";

type Cases = [
  Expect<Equal<
    CommandArguments<"rename">,
    [input: { projectId: string; name: string }]
  >>,
  Expect<Equal<
    CommandArguments<"archive">,
    [projectId: string, at?: Date]
  >>,
  Expect<Equal<
    CommandResult<"rename">,
    { renamed: true }
  >>,
  Expect<Equal<
    CommandResult<"archive">,
    Promise<{ archivedAt: Date }>
  >>,
];
export type TestCases = Cases;

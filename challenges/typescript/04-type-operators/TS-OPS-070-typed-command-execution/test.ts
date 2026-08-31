import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { execute } from "./task.js";

const archived = execute("archive", { documentId: "d1" });
const restored = execute("restore", { archiveId: "a1" });
type Cases = [
  Expect<Equal<typeof archived, { archivedAt: Date }>>,
  Expect<Equal<typeof restored, { documentId: string }>>,
];
// @ts-expect-error restore requires archiveId
execute("restore", { documentId: "d1" });
export type TestCases = Cases;

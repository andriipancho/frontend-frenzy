import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { tap } from "./task.js";

const result = tap(
  { id: "job-1", status: "queued" },
  (job: { id: string; status: string }) => void job.id,
);
type Cases = [
  Expect<Equal<typeof result, { id: string; status: string }>>,
];
export type TestCases = Cases;

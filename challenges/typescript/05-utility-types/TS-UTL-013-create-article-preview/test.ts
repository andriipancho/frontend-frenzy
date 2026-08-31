import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { createPreview } from "./task.js";

const preview = createPreview({
  id: "a1",
  title: "Utility types",
  body: "...",
  authorId: "u1",
  publishedAt: null,
});
type Expected = { id: string; title: string; publishedAt: Date | null };
type Cases = [Expect<Equal<typeof preview, Expected>>];
export type TestCases = Cases;

import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventHandler } from "./task.js";

type Events = {
  saved: { id: string };
  failed: { error: Error };
};
type SavedHandler = EventHandler<Events, "saved">;
type Cases = [
  Expect<
    Equal<Parameters<SavedHandler>[0], { id: string }>
  >,
  Expect<Equal<ReturnType<SavedHandler>, void>>,
];
export type TestCases = Cases;

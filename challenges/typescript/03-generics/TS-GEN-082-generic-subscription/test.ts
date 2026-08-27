import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import { subscribe } from "./task.js";

const unsubscribe = subscribe<{ id: string }>((event) => {
  const id: string = event.id;
  void id;
});
type Cases = [Expect<Equal<typeof unsubscribe, () => void>>];
export type TestCases = Cases;

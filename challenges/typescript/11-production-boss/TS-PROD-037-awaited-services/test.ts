import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { ResolvedServices } from "./task.js";

type Cases = [
  Expect<
    Equal<
      ResolvedServices<{ user: () => Promise<{ id: string }>; flags: () => { beta: boolean }; count: () => Promise<number> }>,
      { user: { id: string }; flags: { beta: boolean }; count: number }
    >
  >,
];

export type TestCases = Cases;

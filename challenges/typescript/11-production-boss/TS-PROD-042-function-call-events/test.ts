import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CallEvents } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CallEvents<{ get(id: string): Promise<{ id: string }>; remove(id: string, force: boolean): boolean; name: string }>,
      { method: "get"; args: [id: string]; result: { id: string } } | { method: "remove"; args: [id: string, force: boolean]; result: boolean }
    >
  >,
];

export type TestCases = Cases;

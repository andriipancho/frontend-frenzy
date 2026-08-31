import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { CommandBus, Commands } from "./task.js";

type Cases = [
  Expect<
    Equal<
      CommandBus<Commands>,
      { createUser: (input: { email: string }) => Promise<{ id: string }>; resetCache: (input: { region: string }) => boolean }
    >
  >,
];

export type TestCases = Cases;

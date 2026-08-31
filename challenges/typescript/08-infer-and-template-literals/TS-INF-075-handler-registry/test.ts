import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { HandlerRegistry } from "./task.js";

type Cases = [
  Expect<
    Equal<
      HandlerRegistry<{ name: "userCreated"; payload: { id: string } } | { name: "sessionClosed"; payload: undefined }>,
      { onUserCreated: (payload: { id: string }) => Promise<void>; onSessionClosed: (payload: undefined) => Promise<void> }
    >
  >,
];

export type TestCases = Cases;

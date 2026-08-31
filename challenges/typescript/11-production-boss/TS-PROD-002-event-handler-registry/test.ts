import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventHandlers, DomainEvent } from "./task.js";

type Cases = [
  Expect<
    Equal<
      EventHandlers<DomainEvent>,
      { "user.created": (event: { userId: string; email: string }) => void; "user.deleted": (event: { userId: string; reason?: string }) => void }
    >
  >,
];

export type TestCases = Cases;

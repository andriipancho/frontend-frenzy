import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { DomainEvent } from "./task.js";

type EmptyEvent = DomainEvent;
type CreatedEvent = DomainEvent<{ id: string }>;
type Cases = [
  Expect<Equal<EmptyEvent["payload"], void>>,
  Expect<Equal<CreatedEvent["payload"], { id: string }>>,
];
export type TestCases = Cases;

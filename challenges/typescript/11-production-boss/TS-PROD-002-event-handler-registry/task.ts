export type DomainEvent =
  | { type: "user.created"; userId: string; email: string }
  | { type: "user.deleted"; userId: string; reason?: string };

// TODO: preserve every key-specific relationship in the derived contract.
export type EventHandlers<U extends { type: PropertyKey }> = unknown;

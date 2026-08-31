export type EventName =
  | "user:created"
  | "user:deleted"
  | "invoice:paid"
  | "system:ready";

export type UserEvent = EventName;

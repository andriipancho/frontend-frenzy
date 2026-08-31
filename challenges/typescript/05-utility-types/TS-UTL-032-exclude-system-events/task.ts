export type EventName =
  | "user:created"
  | "user:deleted"
  | "system:started"
  | "system:stopped";

export type ApplicationEvent = EventName;

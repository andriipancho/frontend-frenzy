export type EventPayload = {
  name: string;
  timestamp: number;
};

export function recordEvent(payload: EventPayload): string {
  return `${payload.timestamp}:${payload.name}`;
}

export type EventPayload = {
  name: string;
  timestamp: number;
};

export function recordEvent(payload) {
  return `${payload.timestamp}:${payload.name}`;
}

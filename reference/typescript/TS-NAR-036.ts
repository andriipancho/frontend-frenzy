export type InputEventData =
  | { key: string; code: string }
  | { x: number; y: number };

export function summarizeInput(event: InputEventData): string {
  return "key" in event ? event.key.toUpperCase() : `${event.x},${event.y}`;
}

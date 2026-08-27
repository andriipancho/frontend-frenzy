export type InputEventData =
  | { key: string; code: string }
  | { x: number; y: number };

export function summarizeInput(event: InputEventData): string {
  return event.key.toUpperCase();
}

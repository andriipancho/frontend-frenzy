export type SocketMessage =
  | { type: "text"; text: string }
  | { type: "presence"; userId: string; online: boolean }
  | { type: "error"; message: string };

export function socketSummary(message: SocketMessage): string {
  return message.text;
}

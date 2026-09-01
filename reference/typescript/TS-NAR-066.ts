export type SocketMessage =
  | { type: "text"; text: string }
  | { type: "presence"; userId: string; online: boolean }
  | { type: "error"; message: string };

export function socketSummary(message: SocketMessage): string {
  switch (message.type) {
    case "text":
      return message.text;
    case "presence":
      return `${message.userId}:${message.online}`;
    case "error":
      return message.message;
  }
}

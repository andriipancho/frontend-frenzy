export type TransportCommand =
  | { kind: "connect"; endpoint: string }
  | { kind: "send"; data: string }
  | { kind: "disconnect"; reason: string };

export function commandSummary(command: TransportCommand): string {
  switch (command.kind) {
    case "connect":
      return command.endpoint;
    case "send":
      return command.data;
    case "disconnect":
      return command.reason;
  }
}

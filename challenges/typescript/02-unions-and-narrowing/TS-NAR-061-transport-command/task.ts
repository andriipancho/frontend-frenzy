export type TransportCommand =
  | { kind: "connect"; endpoint: string }
  | { kind: "send"; data: string }
  | { kind: "disconnect"; reason: string };

export function commandSummary(command: TransportCommand): string {
  return command.endpoint;
}

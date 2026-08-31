export function logMessage(
  level: "info" | "error",
  message: string,
  context?: Record<string, unknown>,
): void {
  void level;
  void message;
  void context;
}

export type LogArguments = unknown[];

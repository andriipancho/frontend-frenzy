export function emit(
  event: "connected" | "disconnected",
  payload: { at: Date },
): void {
  void event;
  void payload;
}

export type EmitArguments = [string, object];

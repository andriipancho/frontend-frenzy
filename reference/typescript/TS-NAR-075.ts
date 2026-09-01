export type AsyncState =
  | { status: "idle" }
  | { status: "loading"; startedAt: Date }
  | { status: "success"; data: string }
  | { status: "failure"; error: string }
  | { status: "cancelled"; reason: string };

function assertNever(value: never): never {
  throw new Error(`Unhandled state: ${JSON.stringify(value)}`);
}

export function renderAsyncState(state: AsyncState): string {
  switch (state.status) {
    case "idle":
      return "Idle";
    case "loading":
      return `Loading since ${state.startedAt.toISOString()}`;
    case "success":
      return state.data;
    case "failure":
      return state.error;
    case "cancelled":
      return state.reason;
    default:
      return assertNever(state);
  }
}

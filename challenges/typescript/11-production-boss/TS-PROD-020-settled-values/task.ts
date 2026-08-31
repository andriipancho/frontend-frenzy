export type Operation =
  | { state: "idle" }
  | { state: "pending"; startedAt: Date }
  | { state: "success"; value: { id: string } }
  | { state: "failure"; error: Error };

// TODO: preserve branch-specific information in the transformed contract.
export type SettledValue<U> = unknown;

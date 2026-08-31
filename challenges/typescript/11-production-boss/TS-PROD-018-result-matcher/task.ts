export type Result =
  | { status: "success"; value: string }
  | { status: "failure"; error: Error }
  | { status: "cancelled"; reason?: string };

// TODO: preserve branch-specific information in the transformed contract.
export type ResultMatchers<U extends { status: PropertyKey }, R> = unknown;

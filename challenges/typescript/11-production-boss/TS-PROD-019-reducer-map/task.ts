export type CounterAction =
  | { type: "increment"; amount: number }
  | { type: "reset" }
  | { type: "restore"; snapshot: { value: number } };

// TODO: preserve branch-specific information in the transformed contract.
export type ReducerMap<State, U extends { type: PropertyKey }> = unknown;

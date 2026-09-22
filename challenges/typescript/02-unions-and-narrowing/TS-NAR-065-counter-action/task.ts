export type CounterAction =
  | { type: "increment"; amount: number }
  | { type: "decrement"; amount: number }
  | { type: "reset" };

export function reduceCounter(state: number, action: CounterAction): number {
  if (action.type === "increment") {
    return state + action.amount;
  }
  if (action.type === "decrement") {
    return state - action.amount;
  }
  return 0;
}

export type CounterAction =
  | { type: "increment"; amount: number }
  | { type: "decrement"; amount: number }
  | { type: "reset" };

export function reduceCounter(state: number, action: CounterAction): number {
  return state + action.amount;
}

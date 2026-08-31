export type Operation = "increment" | "decrement" | "reset";
export type OperationFn = (value: number) => number;

export type Operations = Record<string, OperationFn>;

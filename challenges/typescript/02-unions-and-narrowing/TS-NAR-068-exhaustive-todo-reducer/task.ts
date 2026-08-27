export type Todo = { id: string; done: boolean };
export type TodoAction =
  | { type: "add"; todo: Todo }
  | { type: "toggle"; id: string }
  | { type: "clear" };

function assertNever(value: never): never {
  throw new Error(`Unhandled action: ${JSON.stringify(value)}`);
}

export function reduceTodos(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "add":
      return [...state, action.todo];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    default:
      return assertNever(action);
  }
}

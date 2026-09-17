export interface CommandDispatcher<Commands extends object> {
  dispatch<Command extends keyof Commands>(
    command: Command,
    payload: Commands[Command],
  ): void;
}

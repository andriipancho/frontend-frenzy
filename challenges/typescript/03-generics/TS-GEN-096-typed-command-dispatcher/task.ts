export interface CommandDispatcher<Commands extends object> {
  dispatch(
    command: keyof Commands,
    payload: Commands[keyof Commands],
  ): void;
}

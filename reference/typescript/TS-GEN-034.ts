export interface Store<TState> {
  getState(): TState;
  setState(state: TState): void;
}

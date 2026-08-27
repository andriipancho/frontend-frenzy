export interface Store<TState> {
  getState(): unknown;
  setState(state: unknown): void;
}

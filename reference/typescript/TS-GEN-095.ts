export interface EventEmitter<Events extends object> {
  emit<Name extends keyof Events>(
    name: Name,
    payload: Events[Name],
  ): void;
  on<Name extends keyof Events>(
    name: Name,
    listener: (payload: Events[Name]) => void,
  ): () => void;
}

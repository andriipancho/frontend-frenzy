export interface EventEmitter<Events extends object> {
  emit(
    name: keyof Events,
    payload: Events[keyof Events],
  ): void;
  on(
    name: keyof Events,
    listener: (payload: Events[keyof Events]) => void,
  ): () => void;
}

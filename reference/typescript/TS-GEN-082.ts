export function subscribe<T>(
  listener: (value: T) => void,
): () => void {
  void listener;
  return () => undefined;
}

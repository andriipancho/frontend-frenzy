export function subscribe(
  listener: (value: unknown) => void,
): () => void {
  void listener;
  return () => undefined;
}

export async function asyncMap<T, R>(
  value: T,
  transform: (value: T) => Promise<R>,
): Promise<R> {
  return transform(value);
}

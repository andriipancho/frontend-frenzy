export async function retry<T>(
  operation: () => Promise<T>,
): Promise<T> {
  return operation();
}

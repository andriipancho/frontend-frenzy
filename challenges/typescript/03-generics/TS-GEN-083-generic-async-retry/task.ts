export async function retry(
  operation: () => Promise<unknown>,
): Promise<unknown> {
  return operation();
}

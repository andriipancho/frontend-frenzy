export function preserveMessage<T extends { message: string }>(value: T): T {
  return value;
}

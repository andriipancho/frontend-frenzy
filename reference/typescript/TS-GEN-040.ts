export function preserveCreated<T extends { createdAt: Date }>(value: T): T {
  return value;
}

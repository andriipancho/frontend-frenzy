export function createEntity<T extends { id: string }>(input: T): T & { createdAt: Date } {
  return { ...input, createdAt: new Date() };
}

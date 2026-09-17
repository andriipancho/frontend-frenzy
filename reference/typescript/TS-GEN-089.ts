export function createTimestamped<T extends object>(
  value: T,
): T & { createdAt: Date } {
  return { ...value, createdAt: new Date() };
}

export function createTimestamped(
  value: object,
): object & { createdAt: Date } {
  return { ...value, createdAt: new Date() };
}

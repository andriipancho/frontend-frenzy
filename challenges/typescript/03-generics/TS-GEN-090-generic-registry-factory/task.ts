export function createRegistry(): {
  get(key: string): unknown;
  set(key: string, value: unknown): void;
} {
  const values = new Map<string, unknown>();
  return {
    get: (key) => values.get(key),
    set: (key, value) => {
      values.set(key, value);
    },
  };
}

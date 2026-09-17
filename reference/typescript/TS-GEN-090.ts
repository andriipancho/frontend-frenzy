export function createRegistry<T>(): {
  get(key: string): T | undefined;
  set(key: string, value: T): void;
} {
  const values = new Map<string, T>();
  return {
    get: (key) => values.get(key),
    set: (key, value) => {
      values.set(key, value);
    },
  };
}

export function createState(initial: unknown): {
  get(): unknown;
  set(value: unknown): void;
} {
  let current = initial;
  return {
    get: () => current,
    set: (value) => {
      current = value;
    },
  };
}

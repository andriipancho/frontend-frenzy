export function createState<T>(initial: T): {
  get(): T;
  set(value: T): void;
} {
  let current = initial;
  return {
    get: () => current,
    set: (value) => {
      current = value;
    },
  };
}

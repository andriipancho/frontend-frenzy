export function createStore() {
  let value = 0;
  return {
    get: () => value,
    set: (next: number) => {
      value = next;
    },
    reset: () => {
      value = 0;
    },
  };
}

export type Store = object;

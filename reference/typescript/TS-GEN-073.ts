export type Column<T extends object, K extends keyof T> = {
  key: K;
  render: (value: T[K]) => string;
};

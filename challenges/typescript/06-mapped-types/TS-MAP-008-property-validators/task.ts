export type Validators<T> = {
  [K in keyof T]: (value: unknown) => boolean;
};

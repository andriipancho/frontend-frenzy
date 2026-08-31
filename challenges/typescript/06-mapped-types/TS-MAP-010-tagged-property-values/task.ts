export type TaggedProperties<T> = {
  [K in keyof T]: { key: PropertyKey; value: unknown };
};

export type PromiseLikeValue = {
  then: (resolve: (value: unknown) => void) => unknown;
};

export function isPromiseLike(value: unknown): value is PromiseLikeValue {
  return (
    typeof value === "object" &&
    value !== null &&
    "then" in value &&
    typeof value.then === "function"
  );
}

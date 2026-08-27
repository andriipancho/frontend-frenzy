export type PromiseLikeValue = {
  then: (resolve: (value: unknown) => void) => unknown;
};

export function isPromiseLike(value: unknown): boolean {
  return (
    typeof value === "object" &&
    value !== null &&
    "then" in value &&
    typeof value.then === "function"
  );
}

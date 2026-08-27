export type User = {
  id: string;
  active: boolean;
};

export function isUser(value: unknown): boolean {
  // TODO: validate the shape and expose the result as a type predicate.
  return typeof value === "object" && value !== null;
}

export type User = {
  id: string;
  active: boolean;
};

export function isUser(value: unknown): value is User {
  // TODO: validate the shape and expose the result as a type predicate.
  return typeof value === "object" && value !== null && "id" in value && "active" in value && typeof value.id === "string" && typeof value.active === "boolean";
}

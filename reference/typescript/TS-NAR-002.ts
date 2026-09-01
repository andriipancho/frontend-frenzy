export type User = {
  id: string;
  active: boolean;
};

export function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "string" &&
    "active" in value &&
    typeof value.active === "boolean"
  );
}

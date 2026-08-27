export type ErrorLike = { message: string };

export function isErrorLike(value: unknown): boolean {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    typeof value.message === "string"
  );
}

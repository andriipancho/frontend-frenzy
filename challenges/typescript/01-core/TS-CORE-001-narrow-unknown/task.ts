export function toErrorMessage(value: unknown): string {
  // TODO: narrow value before reading from it.
  if(
    typeof value === "object" && value !== null && "message" in value && typeof value?.message === "string") {
    return value.message;
  }
  return "";
}

export type Identified = { id: string };

export function hasStringId(value: unknown): value is Identified {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "string"
  );
}

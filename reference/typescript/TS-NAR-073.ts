export type SelectionInput = string | { id: string; label: string } | null;

export function selectionId(value: SelectionInput): string | undefined {
  if (typeof value === "string") {
    return value;
  }
  return value === null ? undefined : value.id;
}

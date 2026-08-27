export type SelectionInput = string | { id: string; label: string } | null;

export function selectionId(value: SelectionInput): string | undefined {
  return value.id;
}

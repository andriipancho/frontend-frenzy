export type Label = string | null | undefined;

export function normalizeLabel(value: Label): string {
  return value?.trim().toLowerCase() ?? "";
}

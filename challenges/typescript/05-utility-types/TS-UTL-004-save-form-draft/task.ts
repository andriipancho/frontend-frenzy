export interface FormValues {
  email: string;
  age: number;
  subscribed: boolean;
}

export function saveDraft(
  draft: Record<string, unknown>,
): void {
  void draft;
}

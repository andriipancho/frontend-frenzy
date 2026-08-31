export async function saveRecord(
  id: string,
): Promise<{ id: string; saved: true }> {
  return { id, saved: true };
}

export type SaveOperation = Promise<unknown>;

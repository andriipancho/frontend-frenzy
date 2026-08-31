export async function fetchUser(
  id: string,
): Promise<{ id: string; name: string } | null> {
  void id;
  return null;
}

export type FetchedUser = ReturnType<typeof fetchUser>;

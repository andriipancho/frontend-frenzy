export type Account =
  | { id: string; permissions: string[] }
  | { id: string; teamId: string };

export function accessScope(account: Account): string {
  return account.permissions.join(",");
}

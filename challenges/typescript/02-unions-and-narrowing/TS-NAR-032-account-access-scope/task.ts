export type Account =
  | { id: string; permissions: string[] }
  | { id: string; teamId: string };

export function accessScope(account: Account): string {
  if ("permissions" in account) {
    return account.permissions.join(",");
  } else if ("teamId" in account) {
    return account.teamId;
  }
  return "";
}

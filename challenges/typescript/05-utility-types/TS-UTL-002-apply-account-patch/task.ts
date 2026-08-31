export interface Account {
  id: string;
  displayName: string;
  active: boolean;
}

export function applyAccountPatch(
  account: Account,
  patch: object,
): Account {
  return { ...account, ...patch };
}

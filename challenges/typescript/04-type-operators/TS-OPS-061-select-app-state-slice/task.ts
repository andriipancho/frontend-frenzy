export interface AppState {
  session: { userId: string } | null;
  cart: { itemIds: string[] };
  online: boolean;
}

export function selectSlice(
  state: AppState,
  key: keyof AppState,
): AppState[keyof AppState] {
  return state[key];
}

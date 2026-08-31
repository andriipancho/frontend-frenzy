export interface SessionState {
  user: { id: string; name: string } | null | undefined;
  loading: boolean;
}

export type LoadedUser = SessionState["user"];

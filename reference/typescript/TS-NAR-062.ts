export type AuthState =
  | { status: "anonymous" }
  | { status: "authenticating" }
  | { status: "authenticated"; user: { id: string } }
  | { status: "rejected"; error: string };

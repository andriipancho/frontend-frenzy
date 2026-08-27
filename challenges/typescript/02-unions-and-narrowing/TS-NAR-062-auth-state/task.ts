export type AuthState = {
  status: "anonymous" | "authenticating" | "authenticated" | "rejected";
  user?: { id: string };
  error?: string;
};

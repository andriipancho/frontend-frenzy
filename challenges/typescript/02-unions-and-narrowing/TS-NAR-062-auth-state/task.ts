export type AuthState = | {
  status: "authenticated";
  user: { id: string };
} | {
  status: "anonymous";
} | {
  status: "authenticating";
} | {
  status: "rejected";
  error: string;
};

export interface Session {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
}

export function sanitizeSession(session: Session): object {
  const { token, ...safe } = session;
  void token;
  return safe;
}

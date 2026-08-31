export interface AuthSession {
  id: string;
  userId: string;
  expiresAt: Date;
  accessToken: string;
  refreshToken: string;
  signature: string;
}

export type SessionView = AuthSession;

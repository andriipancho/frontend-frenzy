export interface User {
  id: string;
  name: string;
  avatarUrl: string | null;
  email: string;
  passwordHash: string;
}

export type PublicUser = object;

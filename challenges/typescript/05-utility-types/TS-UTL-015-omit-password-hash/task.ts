export interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

export type SafeUserRecord = UserRecord;

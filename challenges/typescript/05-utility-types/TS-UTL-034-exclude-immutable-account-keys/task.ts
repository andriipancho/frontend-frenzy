export interface Account {
  id: string;
  email: string;
  displayName: string;
  active: boolean;
  createdAt: Date;
}

export type EditableAccountKey = keyof Account;

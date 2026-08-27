export type User = {
  name: string;
  age: number;
  active: boolean;
};

// TODO: preserve the relationship between key and value.
export function updateUser(user: User, key: keyof User, value: User[keyof User]): User {
  return { ...user, [key]: value };
}

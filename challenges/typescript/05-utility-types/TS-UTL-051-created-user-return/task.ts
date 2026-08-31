export function createUser(name: string) {
  return {
    id: crypto.randomUUID(),
    name,
    createdAt: new Date(),
  };
}

export type CreatedUser = object;

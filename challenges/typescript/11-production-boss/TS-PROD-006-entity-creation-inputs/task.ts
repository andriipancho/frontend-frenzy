export type StoredUser = { readonly id: string; readonly createdAt: Date; name: string; role: "admin" | "member" };

// TODO: preserve every key-specific relationship in the derived contract.
export type CreateInput<T extends object, Generated extends keyof T> = unknown;

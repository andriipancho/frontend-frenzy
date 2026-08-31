export const permissionMatrix = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};

export type Role = string;
export type Permission = string;

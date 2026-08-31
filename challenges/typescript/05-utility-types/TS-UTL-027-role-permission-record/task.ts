export type Role = "admin" | "editor" | "viewer";
export type Permission = "read" | "write" | "delete";

export type PermissionsByRole = Record<Role, Permission[]>;

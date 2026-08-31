export type CanPerform<Role extends "owner" | "editor" | "viewer", Action extends "read" | "write" | "delete"> = false;

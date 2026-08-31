export type Role = "admin" | "editor" | "viewer";

export const roleLabels: Record<Role, string> = {
  admin: "Administrator",
  editor: "Content editor",
  viewer: "Read only",
};

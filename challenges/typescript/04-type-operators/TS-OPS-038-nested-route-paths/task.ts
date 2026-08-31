export const routeTable = {
  users: { method: "GET", path: "/users" },
  user: { method: "GET", path: "/users/:id" },
  create: { method: "POST", path: "/users" },
};

export type RoutePath = string;

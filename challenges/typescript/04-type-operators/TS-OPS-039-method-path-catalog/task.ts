export const apiRoutes = {
  list: { method: "GET", path: "/items" },
  create: { method: "POST", path: "/items" },
  remove: { method: "DELETE", path: "/items/:id" },
};

export type ApiMethod = string;
export type ApiPath = string;

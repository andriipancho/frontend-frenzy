type Route = {
  method: "GET" | "POST";
  path: `/${string}`;
};

// TODO: validate the shape without widening its exact values.
export const routes: Record<string, Route> = {
  users: { method: "GET", path: "/users" },
  createUser: { method: "POST", path: "/users" },
};

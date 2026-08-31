export type ApiSchema = {
  getUser: { method: "GET"; params: { id: string }; body: never; response: { name: string } };
  updateUser: { method: "PATCH"; params: { id: string }; body: { name?: string }; response: { updated: true } };
};

// TODO: compose the application contract from the specification.
export type RestClient<S extends { [K in keyof S]: { method: string; params: unknown; body: unknown; response: unknown } }> = unknown;

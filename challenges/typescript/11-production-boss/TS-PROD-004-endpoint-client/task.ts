export type Endpoints = {
  getUser: { request: { id: string }; response: { name: string } };
  search: { request: { query: string; limit?: number }; response: readonly string[] };
};

// TODO: preserve every key-specific relationship in the derived contract.
export type EndpointClient<E extends { [K in keyof E]: { request: unknown; response: unknown } }> = unknown;

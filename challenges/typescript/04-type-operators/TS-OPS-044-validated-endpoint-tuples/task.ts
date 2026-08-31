export type Endpoint = readonly [
  method: "GET" | "POST",
  path: `/${string}`,
];

export const endpoints: readonly Endpoint[] = [
  ["GET", "/users"],
  ["POST", "/users"],
];

export type Routes = {
  "/users/:id": { method: "GET"; response: { id: string } };
  "/teams/:teamId/members/:memberId": { method: "DELETE"; response: { removed: true } };
};

// TODO: compose the application contract from the specification.
export type RouterContract<R extends { [K in keyof R]: { method: string; response: unknown } }> = unknown;

type RouteParams<Path extends string> = unknown;

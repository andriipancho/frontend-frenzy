export type ServiceSpec = {
  users: { commands: { create: { email: string }; remove: { id: string } }; queries: { byId: { input: { id: string }; output: { name: string } } } };
  teams: { commands: { archive: { id: string } }; queries: { members: { input: { teamId: string }; output: readonly string[] } } };
};

// TODO: compose the application contract from the specification.
export type ApplicationServices<S extends { [K in keyof S]: { commands: object; queries: { [Q in keyof S[K]["queries"]]: { input: unknown; output: unknown } } } }> = unknown;

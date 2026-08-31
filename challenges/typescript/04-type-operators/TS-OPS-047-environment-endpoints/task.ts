export type Environment = "development" | "staging" | "production";

export const endpointsByEnvironment: Record<Environment, string> = {
  development: "https://dev.example.com",
  staging: "https://staging.example.com",
  production: "https://example.com",
};

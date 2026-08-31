export type Environment = "development" | "staging" | "production";

export interface ServiceConfig {
  apiUrl: string;
  timeoutMs: number;
}

export type ServicesByEnvironment = Record<string, ServiceConfig>;

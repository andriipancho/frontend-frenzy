export interface Service {
  request(path: string): Promise<unknown>;
}

export type ServiceConstructor = new (
  baseUrl: string,
  retries: number,
) => Service;

export type ServiceArguments = unknown[];

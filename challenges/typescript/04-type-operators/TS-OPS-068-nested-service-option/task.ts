export interface ServiceOptions {
  api: { baseUrl: string; retries: number };
  cache: { ttl: number; enabled: boolean };
}

export function readServiceOption(
  options: ServiceOptions,
  service: keyof ServiceOptions,
  key: PropertyKey,
): unknown {
  return Reflect.get(options[service], key);
}

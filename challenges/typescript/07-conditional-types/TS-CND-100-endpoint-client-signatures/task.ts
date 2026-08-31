export type EndpointClient<T extends { [Key in keyof T]: { request: unknown; response: unknown; auth: boolean } }> = T;

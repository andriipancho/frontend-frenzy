export interface ApiClient<Routes extends object> {
  request<Endpoint extends keyof Routes>(
    endpoint: Endpoint,
  ): Promise<Routes[Endpoint]>;
}

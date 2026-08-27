export interface ApiClient<Routes extends object> {
  request(
    endpoint: keyof Routes,
  ): Promise<Routes[keyof Routes]>;
}

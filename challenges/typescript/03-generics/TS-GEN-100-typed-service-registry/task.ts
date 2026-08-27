export interface ServiceRegistry<Services extends object> {
  get(key: keyof Services): Services[keyof Services];
  set(
    key: keyof Services,
    service: Services[keyof Services],
  ): void;
}

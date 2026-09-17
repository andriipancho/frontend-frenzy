export interface ServiceRegistry<Services extends object> {
  get<Key extends keyof Services>(key: Key): Services[Key];
  set<Key extends keyof Services>(
    key: Key,
    service: Services[Key],
  ): void;
}

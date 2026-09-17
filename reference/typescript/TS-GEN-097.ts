export interface ConfigReader<Config extends object> {
  get<Key extends keyof Config>(key: Key): Config[Key];
}

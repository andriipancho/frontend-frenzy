export interface ConfigReader<Config extends object> {
  get(key: keyof Config): Config[keyof Config];
}

export type Settings = {
  theme?: { name: string };
};

export function themeName(settings: Settings): string {
  return settings.theme === undefined ? "default" : settings.theme.name;
}

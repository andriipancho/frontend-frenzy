export type Settings = {
  theme?: { name: string };
};

export function themeName(settings: Settings): string {
  return settings.theme.name;
}

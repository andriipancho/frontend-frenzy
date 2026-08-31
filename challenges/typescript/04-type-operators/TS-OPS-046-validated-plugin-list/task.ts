export type Plugin = {
  name: string;
  setup(): void;
};

export const plugins: readonly Plugin[] = [
  { name: "logger", setup() {} },
  { name: "metrics", setup() {} },
];

export type PluginName = string;

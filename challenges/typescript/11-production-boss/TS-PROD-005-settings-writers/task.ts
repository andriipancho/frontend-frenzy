export type Settings = { theme: "light" | "dark"; pageSize: number; telemetry: boolean };

// TODO: preserve every key-specific relationship in the derived contract.
export type SettingsWriters<T extends object> = unknown;

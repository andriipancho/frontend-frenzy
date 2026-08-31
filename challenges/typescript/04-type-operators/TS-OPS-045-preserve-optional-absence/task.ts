export type TelemetryConfig = {
  endpoint: string;
  sampleRate?: number;
};

export const telemetry: TelemetryConfig = {
  endpoint: "/telemetry",
};

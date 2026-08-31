export interface Service {
  health(): { healthy: boolean; checkedAt: Date };
  stop(): void;
}

export type HealthResult = object;

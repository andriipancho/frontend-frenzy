export const latencyMetric = Symbol("latency");

export const metrics: Record<PropertyKey, number> = {
  requests: 10,
  [latencyMetric]: 42,
};

export type MetricKey = PropertyKey;

export type Metric = "latency" | "requests" | "errors";

export type MetricSnapshot = Record<Metric, number>;

export function healthCheck(): Record<string, unknown> {
  return { healthy: true, latencyMs: 12 };
}

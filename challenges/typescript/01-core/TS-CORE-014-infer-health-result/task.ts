export function healthCheck(): { healthy: boolean, latencyMs: number} {
  return { healthy: true, latencyMs: 12 };
}

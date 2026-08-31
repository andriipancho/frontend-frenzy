export function schedule(
  task: () => void,
  options: { delayMs: number; priority?: "low" | "high" },
): number {
  void task;
  return options.delayMs;
}

export type ScheduleOptions = object;

export type JobState =
  | { status: "queued" }
  | { status: "running"; startedAt: Date }
  | { status: "completed"; result: string; finishedAt: Date }
  | { status: "failed"; error: string; finishedAt: Date };

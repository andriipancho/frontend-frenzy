export type JobState = {
  status: "queued" | "running" | "completed" | "failed";
  startedAt?: Date;
  finishedAt?: Date;
  result?: string;
  error?: string;
};

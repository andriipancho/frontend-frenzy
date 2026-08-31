export class Job {
  constructor(
    readonly id: string,
    readonly attempts: number,
    readonly priority?: "low" | "high",
  ) {}
}

export type QueuedJobArguments = ConstructorParameters<typeof Job>;

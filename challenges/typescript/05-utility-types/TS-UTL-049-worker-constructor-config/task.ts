export class Worker {
  constructor(
    readonly config: {
      queue: string;
      concurrency: number;
    },
    readonly logger: (message: string) => void,
  ) {}
}

export type WorkerConfig = object;

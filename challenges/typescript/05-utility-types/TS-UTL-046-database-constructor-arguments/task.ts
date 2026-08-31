export class Database {
  constructor(
    readonly url: string,
    readonly poolSize: number,
    readonly ssl?: boolean,
  ) {}
}

export type DatabaseArguments = unknown[];

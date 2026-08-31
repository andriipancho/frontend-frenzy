export class Database {
  constructor(
    readonly url: string,
    readonly poolSize: number,
    readonly ssl?: boolean,
  ) {}
}

export function createDatabase(...args: unknown[]): Database {
  return new Database(
    String(args[0]),
    Number(args[1]),
    args[2] === undefined ? undefined : Boolean(args[2]),
  );
}

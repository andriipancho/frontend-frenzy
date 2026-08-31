export type AsyncLookup =
  | Promise<string>
  | Promise<number>
  | null;

export type LookupResult = AsyncLookup;

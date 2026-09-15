export function formatEntry(entry: readonly [string, number]): string {
  return `${entry[0]}=${entry[1]}`;
}

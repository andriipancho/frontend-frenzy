export function swapEntry(entry: [number, string]): (string | number)[] {
  return [entry[1], entry[0]];
}

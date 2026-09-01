export function itemCount(items: string[] | undefined): number {
  return items === undefined ? 0 : items.length;
}

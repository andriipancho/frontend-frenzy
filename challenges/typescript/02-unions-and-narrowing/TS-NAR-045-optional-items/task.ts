export function itemCount(items: string[] | undefined): number {
  return items instanceof Array ? items.length : 0;
}

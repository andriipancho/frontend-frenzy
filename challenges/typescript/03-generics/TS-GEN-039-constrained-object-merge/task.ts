export function mergeObjects(left: object, right: object): object {
  return { ...left, ...right };
}

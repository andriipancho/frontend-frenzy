export function mergeObjects<L extends object, R extends object>(left: L, right: R): L & R {
  return { ...left, ...right };
}

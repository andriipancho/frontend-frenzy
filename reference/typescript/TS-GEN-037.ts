export function findEntity<T extends { id: string }>(
  entities: readonly T[],
  id: string,
): T | undefined {
  return entities.find((entity) => entity.id === id);
}

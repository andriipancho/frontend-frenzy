export function findEntity(
  entities: readonly { id: string }[],
  id: string,
): { id: string } | undefined {
  return entities.find((entity) => entity.id === id);
}

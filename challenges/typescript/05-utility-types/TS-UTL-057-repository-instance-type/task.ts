export interface Repository {
  find(id: string): Promise<{ id: string } | null>;
  save(entity: { id: string }): Promise<void>;
}

export type RepositoryConstructor = new (
  connection: string,
) => Repository;

export type RepositoryInstance = object;

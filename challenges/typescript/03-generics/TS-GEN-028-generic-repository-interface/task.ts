export interface Repository<T> {
  findById(id: string): unknown;
  findAll(): unknown[];
}

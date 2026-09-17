export interface Repository<T> {
  findById(id: string): T | undefined;
  findAll(): T[];
}

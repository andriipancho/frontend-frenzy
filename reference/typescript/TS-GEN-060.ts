export type DomainEvent<T = void> = {
  name: string;
  payload: T;
};

export interface Serializer<T> {
  encode(value: T): string;
  decode(value: string): T;
}

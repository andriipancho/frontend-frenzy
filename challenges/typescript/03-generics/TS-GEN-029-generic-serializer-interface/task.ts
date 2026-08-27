export interface Serializer<T> {
  encode(value: unknown): string;
  decode(value: string): unknown;
}

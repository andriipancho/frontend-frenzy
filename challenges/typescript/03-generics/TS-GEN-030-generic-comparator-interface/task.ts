export interface Comparator<T> {
  compare(left: unknown, right: unknown): number;
}

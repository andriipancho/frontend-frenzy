export function average(values: readonly number[]): number {
  return values.reduce((total, value) => total + value, 0) / values.length;
}

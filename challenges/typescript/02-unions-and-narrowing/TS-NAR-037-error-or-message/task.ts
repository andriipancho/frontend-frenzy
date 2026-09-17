export function errorMessage(value: Error | string): string {
  if(typeof value === 'string') {
    return value;
  }
  return value.message;
}

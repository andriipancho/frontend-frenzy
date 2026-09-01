export type Completion = (result: string) => void;

export function complete(callback: Completion | undefined, result: string): void {
  if (callback !== undefined) {
    callback(result);
  }
}

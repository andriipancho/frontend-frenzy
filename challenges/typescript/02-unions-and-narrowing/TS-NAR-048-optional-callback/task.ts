export type Completion = (result: string) => void;

export function complete(callback: Completion | undefined, result: string): void {
  callback(result);
}

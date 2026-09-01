export class NetworkFailure extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
  }
}

export function failureStatus(error: Error | NetworkFailure): number | undefined {
  return error instanceof NetworkFailure ? error.status : undefined;
}

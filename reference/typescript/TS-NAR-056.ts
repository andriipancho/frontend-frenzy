export type Success = { ok: true; data: string };
export type Failure = { ok: false; error: string };
export type Result = Success | Failure;

export function isSuccess(result: Result): result is Success {
  return result.ok;
}

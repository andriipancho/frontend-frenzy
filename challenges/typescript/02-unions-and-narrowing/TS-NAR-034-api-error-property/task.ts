export type ApiResult =
  | { data: string }
  | { error: { message: string; status: number } };

export function resultMessage(result: ApiResult): string {
  return result.error.message;
}

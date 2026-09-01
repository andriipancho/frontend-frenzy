export type ApiResult =
  | { data: string }
  | { error: { message: string; status: number } };

export function resultMessage(result: ApiResult): string {
  return "data" in result ? result.data : result.error.message;
}

export type ApiResult =
  | { data: string }
  | { error: { message: string; status: number } };

export function resultMessage(result: ApiResult): string {
  if("data" in result) {
    return result.data;
  }
  return result.error.message;
}

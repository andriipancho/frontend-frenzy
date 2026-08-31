export interface MessageParams {
  welcome: { name: string };
  unread: { count: number };
  offline: Record<never, never>;
}

export function translate(
  key: keyof MessageParams,
  params: MessageParams[keyof MessageParams],
): string {
  return `${String(key)}:${JSON.stringify(params)}`;
}

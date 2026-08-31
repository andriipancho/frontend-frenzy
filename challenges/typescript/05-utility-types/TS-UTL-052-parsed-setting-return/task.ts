export function parseSetting(
  input: string,
): string | number | boolean {
  if (input === "true") return true;
  const number = Number(input);
  return Number.isNaN(number) ? input : number;
}

export type ParsedSetting = unknown;

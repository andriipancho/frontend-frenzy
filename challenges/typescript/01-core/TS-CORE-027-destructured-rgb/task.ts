export function toCss([red, green, blue]: [number, number, number]): string {
  return `rgb(${red.toFixed()}, ${green.toFixed()}, ${blue.toFixed()})`;
}

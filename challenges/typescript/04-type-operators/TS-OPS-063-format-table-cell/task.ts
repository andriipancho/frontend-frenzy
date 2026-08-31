export interface Row {
  name: string;
  createdAt: Date;
  score: number;
}

export function formatCell(
  row: Row,
  column: keyof Row,
  formatter: (value: Row[keyof Row]) => string,
): string {
  return formatter(row[column]);
}

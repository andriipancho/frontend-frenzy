export type SourceResult =
  | {
      source: "network";
      result: { ok: true; data: string } | { ok: false; error: string };
    }
  | {
      source: "cache";
      result: { state: "hit"; value: string } | { state: "miss" };
    };

export function sourceText(value: SourceResult): string {
  return value.result.data;
}

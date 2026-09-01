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
  if (value.source === "network") {
    return value.result.ok ? value.result.data : value.result.error;
  }
  return value.result.state === "hit" ? value.result.value : "";
}

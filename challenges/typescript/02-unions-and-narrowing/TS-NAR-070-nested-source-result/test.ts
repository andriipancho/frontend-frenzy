import { sourceText } from "./task.js";

sourceText({ source: "network", result: { ok: true, data: "fresh" } });
sourceText({ source: "network", result: { ok: false, error: "offline" } });
sourceText({ source: "cache", result: { state: "hit", value: "cached" } });
sourceText({ source: "cache", result: { state: "miss" } });

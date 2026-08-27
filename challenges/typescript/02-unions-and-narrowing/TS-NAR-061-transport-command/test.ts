import { commandSummary } from "./task.js";

commandSummary({ kind: "connect", endpoint: "wss://example.com" });
commandSummary({ kind: "send", data: "ping" });
commandSummary({ kind: "disconnect", reason: "closed" });

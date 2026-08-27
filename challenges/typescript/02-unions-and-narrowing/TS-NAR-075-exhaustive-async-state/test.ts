import { renderAsyncState } from "./task.js";

renderAsyncState({ status: "idle" });
renderAsyncState({ status: "loading", startedAt: new Date() });
renderAsyncState({ status: "success", data: "ready" });
renderAsyncState({ status: "failure", error: "offline" });
renderAsyncState({ status: "cancelled", reason: "navigation" });

import { socketSummary } from "./task.js";

socketSummary({ type: "text", text: "hello" });
socketSummary({ type: "presence", userId: "u1", online: true });
socketSummary({ type: "error", message: "offline" });

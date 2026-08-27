import { emit } from "./task.js";

emit("connected", { at: new Date() });
emit("message", { text: "hello", senderId: "u1" });
emit("disconnected", { reason: "timeout" });

// @ts-expect-error connected requires its own payload
emit("connected", { reason: "timeout" });
// @ts-expect-error message requires senderId
emit("message", { text: "hello" });

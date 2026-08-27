import type { Equal, Expect } from "../../../../internal/validation/type-assertions.js";
import type { EventEmitter } from "./task.js";

type Events = {
  connected: { socketId: string };
  disconnected: { reason: string };
};
declare const emitter: EventEmitter<Events>;
emitter.emit("connected", { socketId: "s1" });
// @ts-expect-error connected payload requires socketId
emitter.emit("connected", { reason: "timeout" });
const unsubscribe = emitter.on("disconnected", (payload) => {
  const reason: string = payload.reason;
  return void reason;
});
type Cases = [Expect<Equal<typeof unsubscribe, () => void>>];
export type TestCases = Cases;

export type Events = {
  connected: { at: Date };
  message: { text: string; senderId: string };
  disconnected: { reason: string };
};

// TODO: couple the event name to its corresponding payload.
export function emit(name: keyof Events, payload: Events[keyof Events]): void {
  void name;
  void payload;
}

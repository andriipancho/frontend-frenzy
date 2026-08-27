export type EventPayload<
  Events extends object,
  Name extends keyof Events,
> = Events[keyof Events];

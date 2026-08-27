export type EventHandler<
  Events extends object,
  Name extends keyof Events,
> = (payload: Events[keyof Events]) => void;

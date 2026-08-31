export type EventPayload<Union extends { type: PropertyKey; payload: unknown }, Type extends Union["type"]> = Union["payload"];

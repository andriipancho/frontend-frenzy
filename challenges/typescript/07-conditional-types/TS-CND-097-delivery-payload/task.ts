export type DeliveryPayload<Message extends { channel: PropertyKey; payload: unknown }, Channel extends Message["channel"]> = Message["payload"];

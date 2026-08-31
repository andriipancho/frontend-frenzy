export type PayloadPromise = Promise<{
  id: string;
  receivedAt: Date;
}>;

export type Payload = PayloadPromise;
